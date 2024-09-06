import test, { expect } from "@playwright/test";
import { two } from "~/utils";

test("truism", async () => {
  expect(two).toBe(2);
});
