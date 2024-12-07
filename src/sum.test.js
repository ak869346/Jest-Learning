import sum from "./sum";

test("Sum function testing",()=> {
    expect(sum(10,20)).toBe(30);
})

test("Sum testing 2",()=> {
    expect(sum(20,30)).toBe(50);
})