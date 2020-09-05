describe("first day 31 days month (1, 3, 5, 7, 8, 10, 12)", () => {
  test("first day in january", () => {
    const theDate = [1, 1, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 12, 2010]);
  });
  test("first day in march", () => {
    const theDate = [1, 3, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([28, 2, 2010]);
  });

  test("first day in may", () => {
    const theDate = [1, 5, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([30, 4, 2011]);
  });

  test("first day in july", () => {
    const theDate = [1, 7, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([30, 6, 2011]);
  });

  test("first day in august", () => {
    const theDate = [1, 8, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 7, 2011]);
  });

  test("first day in october", () => {
    const theDate = [1, 10, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([30, 9, 2011]);
  });

  test("first day in december", () => {
    const theDate = [1, 12, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([30, 11, 2011]);
  });
});

describe("first day 30 days month (4, 6, 9, 11)", () => {
  test("first day in april", () => {
    const theDate = [1, 4, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 3, 2011]);
  });

  test("first day in june", () => {
    const theDate = [1, 6, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 5, 2011]);
  });

  test("first day in september", () => {
    const theDate = [1, 9, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 8, 2011]);
  });

  test("first day in november", () => {
    const theDate = [1, 11, 2011];
    const result = yesterDate(theDate[0], theDate[1], theDate[2]);
    expect(result).toEqual([31, 10, 2011]);
  });
});
