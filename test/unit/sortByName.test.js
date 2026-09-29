const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

   it("Should handle equal names (case-insensitive) without changing order", () => {
    const input = ["Гарри Поттер", "гарри поттер", "Гарри Поттер"];
    const result = sorting.sortByName(input);

    expect(result).toEqual(input);
  });
});



