import assert from "node:assert";
import { describe, it } from "node:test";
import Option from "./option.js";

describe("option-type", () => {
  it("should allow matching on a None Option", () => {
    const option = Option.None;
    const matched = option.match(
      (_) => assert.fail("should not reach here"),
      () => "💀 Operation Failed",
    );
    assert.strictEqual(matched, "💀 Operation Failed");
  });

  it("should allow matching on a Some Option", () => {
    const option = Option.Some("It works 🚀");
    const matched = option.match(
      (value) => value,
      () => assert.fail("should not reach here"),
    );
    assert.strictEqual(matched, "It works 🚀");
  });
});
