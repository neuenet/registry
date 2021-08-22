


///  N A T I V E

import { join } from "path";

///  I M P O R T

import findAndReplace from "replace-in-file";
import prependFile from "prepend-file";

///  U T I L

const startScriptPath = join(process.cwd(), "build", "index.js");

const startMessage = `
    process.stdout.write([
      "\\n",
      \`\${print.gray(":::")} \`,
      \`\${print.green("🏖 ")} \`,
      \`\${print.bold(print.white(PORT))} \`,
      \`\${print.gray("|")} \`,
      \`\${print.bold(print.white("beachfront-app"))} \`,
      \`\${print.gray("|")} \`,
      \`\${print.bold(print.white("production"))}\`,
      "\\n\\n"
    ].join(""));
`;



///  P R O G R A M

prepareFile();

async function prepareFile() {
  try {
    await prependFile(startScriptPath, `import _print from "@webb/console";\nconst print = _print.default;\n`);

    await findAndReplace({
      encoding: "utf8",
      files: startScriptPath,
      from: /\s+(console\.log\(`Listening on port \${PORT}`\);)/g,
      to: startMessage
    });
  } catch(error) {
    console.log(error.toString());
    console.log("<<<");
  } finally {
    console.log(">>> PROCESSING DONE /// START PATCH COMPLETE");
    return;
  }
}
