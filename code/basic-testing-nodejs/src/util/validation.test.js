import { describe, expect, it } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateNumber()", () => {
  it("should throw an error if a non-numeric value is provided", () => {
    const input = "1";
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });
});

describe("validateStringNotEmpty()", () => {
  it("should not throw an error, if a non-empty string is provided", () => {
    const input = "valid";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).not.toThrow();
  });
});
