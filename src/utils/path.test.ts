import { mockCategories } from "@/mock/mockData";
import { getPageByCategoryName } from "./path";


describe("getPageByCategoryName", () => {

  it("should return the correct getPage for a matching category (case-insensitive)", () => {
    const result1 = getPageByCategoryName(mockCategories, "slots");

    expect(result1).toBe("/slots");
  });

  it("should return an empty string if no category matches the slug", () => {
    const result = getPageByCategoryName(mockCategories, "non-existent-category");
    expect(result).toBe("");
  });

  it("should handle an empty categories array", () => {
    const result = getPageByCategoryName([], "slots");
    expect(result).toBe("");
  });

  it("should handle undefined or null slug", () => {
    const result1 = getPageByCategoryName(mockCategories, undefined as unknown as string);
    const result2 = getPageByCategoryName(mockCategories, null as unknown as string);

    expect(result1).toBe("");
    expect(result2).toBe("");
  });
});