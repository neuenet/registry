/*
  patch-svelte-compiler.js

  replace push with reassign

  cp patch-svelte-compiler.js node_modules/svelte/
  cd node_modules/svelte
  npm i magic-string tosource
  node patch-svelte-compiler.js
*/

const fs = require("fs");

const magicString = require("magic-string");
const nodeToSource = require("tosource");
const { parse } = require("acorn");
const { walk } = require("estree-walker");

const arrayNameList = [];
const baseFile = "compiler.js";
const funcName = "push";
const inputFile = `${baseFile}.orig`;
const outputFile = `${baseFile}.new`;
const replaceMethod = "spread";

if (fs.existsSync(inputFile) || fs.existsSync(outputFile)) {
  console.log("error: input or output file exists. run this script only once");
  process.exit(1);
}

console.log(`move file: ${baseFile} --> ${inputFile}`);
fs.renameSync(baseFile, inputFile);

const content = fs.readFileSync(inputFile, "utf8");
const ast = parse(content, { sourceType: "module" });
let code = new magicString(content);

walk(ast, {
  enter: function(node, parent, prop, index) {
    if (
      node.type !== "CallExpression" ||
      node.callee === undefined ||
      node.callee.property === undefined ||
      node.callee.property.name !== funcName
    ) return;

    if (node.arguments.find(a => (a.type === "SpreadElement")) === undefined)
      return;

    const nodeSrc = content.substring(node.start, node.end);
    const pushObj = node.callee.object;
    const arrayName = content.substring(pushObj.start, pushObj.end);
    const pushProp = node.callee.property;

    arrayNameList.push(arrayName);

    if (replaceMethod == "spread") {
      const pushPropLen = content.substring(pushProp.start, node.end).indexOf("(");

      code.overwrite(
        (pushProp.start - 1),
        (pushProp.start + pushPropLen + 1),
        ` /* PATCHED */ = [...${arrayName}, `
      );

      const closeIdx = node.start + nodeSrc.lastIndexOf(")");
      code.overwrite(closeIdx, (closeIdx + 1), "]");
    }

    if (replaceMethod == "concat") {
      code.overwrite(
        (pushProp.start - 1),
        pushProp.end,
        ` /* PATCHED */ = ${arrayName}.concat`
      );

      node.arguments.forEach(a => {
        if (a.type === "SpreadElement") {
          const spreadArgSrc = content.substring(a.argument.start, a.argument.end);
          code.overwrite(a.start, a.end, spreadArgSrc);
        } else {
          const argSrc = content.substring(a.start, a.end);
          code.overwrite(a.start, a.end, `[${argSrc}]`);
        }
      });
    }
}});

code = code.toString();

function filterUnique(value, index, array) {
  return array.indexOf(value) === index;
}

arrayNameList.filter(filterUnique).forEach(arrayName => {
  console.log(`arrayName = ${arrayName}`);

  code = code.replace(
    new RegExp(`const ${arrayName} = `, "g"),
    `/* PATCHED const ${arrayName} */ let ${arrayName} = `
  );
})

fs.writeFileSync(outputFile, code);
console.log(`move file: ${outputFile} --> ${baseFile}`);
fs.renameSync(outputFile, baseFile);
