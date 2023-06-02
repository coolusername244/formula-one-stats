import { expect } from "chai";
import "mocha";
import { addNumbers } from "./index";
describe("addNumbers function", () => {
  it("should return the sum of two numbers", () => {
    const result = addNumbers(2, 3);
    expect(result).to.equal(5);
  });
});
