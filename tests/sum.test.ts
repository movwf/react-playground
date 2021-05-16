import sum from './sum';

describe("Sum Function", ()=>{
  it("Add 1 + 2 to equal 3", ()=>{
     expect(sum(1,2)).toBe(3);
});
});

test('Add 1 + 2 to equal 3',()=>{
	expect(sum(1,2)).toBe(3);
});
