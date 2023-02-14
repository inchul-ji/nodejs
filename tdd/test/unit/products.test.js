const productController = require("../../controller/product");
// describe("Calculation", () => {
//   test("two plus two is four", () => {
//     expect(2 + 2).toBe(4);
//   });

//   test("two plus two is not five", () => {
//     expect(2 + 2).not.toBe(5);
//   });
// });

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
});
