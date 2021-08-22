/// <reference types="@sveltejs/kit" />

declare module "~util/brands.json";
declare module "~util/brands-reserved.json";
declare module "~util/portfolio.json";
declare module "~util/reserved.json";

declare namespace svelte.JSX {
  // https://stackoverflow.com/a/64131834
  interface HTMLAttributes<T> {
    flex?: boolean
  }
}
