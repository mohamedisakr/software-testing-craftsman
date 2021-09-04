describe("matcher introduction", () => {
  test("primitive values equality", () => {
    expect(true).toBe(true); // passed
    expect(true).toEqual(true); // passed
  });

  test("object equality", () => {
    expect({}).toEqual({}); // passed
  });

  test("array equality", () => {
    expect([]).toEqual([]); // passed
  });
});
