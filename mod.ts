import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// deno-lint-ignore no-explicit-any
export function importJsx(modulePath: string): any {
  return require(modulePath);
}
