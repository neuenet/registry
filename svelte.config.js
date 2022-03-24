


///  N A T I V E

import { resolve } from "path";

///  I M P O R T

import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

///  U T I L

const currentDirectory = process.cwd();



/** @type {import("@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter({
      out: "build"
    }),
    files: {
      assets: "static",
      routes: "src/pages",
      template: "src/__index.html"
    },
    vite: () => ({
      resolve: {
        alias: {
          "~component": resolve(currentDirectory, "src", "component"),
          "~util": resolve(currentDirectory, "src", "utility")
        }
      }
    })
  },
  preprocess: preprocess(
    /// https://github.com/sveltejs/svelte-preprocess
  )
};



///  E X P O R T

export default config;
