import assert from "node:assert";
import { describe, it } from "node:test";
import Result from "./result.js";

describe("result-type", () => {
  it("should create and match against an Err Result", () => {
    const result = Result.Err(new Error("💀 Operation Failed"));
    result.match(
      (_) => assert.fail("result.match was Ok, when it should be Err"),
      (error) => assert.strictEqual(error.message, "💀 Operation Failed"),
    );
  });

  it("should create and match against an Ok Result", () => {
    const result = Result.Ok("It works 🚀");
    result.match(
      (value) => assert.strictEqual(value, "It works 🚀"),
      (_) => assert.fail("result.match was Err, when it should be Ok"),
    );
  });

  it("should allow match to return/set a value with Err Result", () => {
    const result = Result.Err(new Error("💀 Operation Failed"));
    const matched = result.match(
      (_) => assert.fail("result.match was Ok, when it should be Err"),
      (error) => error.message,
    );
    assert.strictEqual(matched, "💀 Operation Failed");
  });

  it("should allow match to return/set a value with Ok Result", () => {
    const result = Result.Ok("It works 🚀");
    const matched = result.match(
      (value) => value,
      (_) => assert.fail("result.match was Err, when it should be Ok"),
    );
    assert.strictEqual(matched, "It works 🚀");
  });
});

