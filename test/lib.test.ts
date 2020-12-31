import { isFirstDayOfYear } from "../lib.ts";
import { assert } from "../deps.dev.ts";

Deno.test({
  name: "Test isFirstDayOfYear",
  fn() {
    assert(isFirstDayOfYear(new Date(2020, 0, 1))); // 2020-1-1
    assert(isFirstDayOfYear(new Date(2021, 0, 1))); // 2021-1-1

    assert(!isFirstDayOfYear(new Date(2020, 12, 31))); // 2020-12-31
    assert(!isFirstDayOfYear(new Date(2021, 1, 1))); // 2021-2-1
  },
});
