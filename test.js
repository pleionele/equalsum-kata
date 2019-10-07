const expect = require("expect");
const equalSum = require("./");

describe("Unit test", () => {
  describe("array of length 2", () => {
    it("should return true when the value is matched", () => {
      expect(equalSum([5, 4], 9)).toBe(true);
    });
    it("should return false when the value is not matched", () => {
      expect(equalSum([5, 3], 9)).toBe(false);
    });
  });
  describe("array of length 3", () => {
    it("should return true when the value is matched", () => {
      expect(equalSum([5, 4, 3], 9)).toBe(true);
    });
    it("should return false when the value is matched", () => {
      expect(equalSum([5, 9, 3, 3], 9)).toBe(false);
    });
  });
  describe("array of length 4", () => {
    it("should return false when the value is not matched", () => {
      expect(equalSum([5, 9, 3, 3], 9)).toBe(false);
    });
    it("should return true when the value is matched with one of the items to be 0", () => {
      expect(equalSum([9, 0, 3, 3], 9)).toBe(true);
    });
  });

  describe("edge cases", () => {
    it("should return false  when there are no two values to equal 9", () => {
      expect(equalSum([5, 0, 3, 3, 3], 9)).toBe(false);
    });
    it("should return false when single value array", () => {
      expect(equalSum([9], 9)).toBe(false);
    });

    it("should return true when length 5", () => {
      expect(equalSum([5, 0, 3, 3, 4], 6)).toBe(true);
    });
    it("should return true when there are 3 times the same value", () => {
      expect(equalSum([5, 3, 3, 3, 4], 6)).toBe(true);
    });
  });
});
