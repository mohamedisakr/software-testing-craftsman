const { calculteMilesPerGallon } = require("../ch-05/ex-06");

//
describe("test miles per gallon function", () => {
  /*
            F = (a – b)/c

            0 ≤ a < 10,000
            0 ≤ b < 10,000  
            0 ≤ c < 18.8
    */
  //
  test("a < 0", async () => {
    const endValue = -1;
    const startValue = 0;
    const tankCapacity = 9.4;
    // const expected =
    // const actual = await calculteMilesPerGallon(
    //   endValue,
    //   startValue,
    //   tankCapacity
    // );
    // expect(actual).toBeFalsy();
    await expect(
      calculteMilesPerGallon(endValue, startValue, tankCapacity)
    ).rejects.toThrowError("Please type number!");
  });
});
