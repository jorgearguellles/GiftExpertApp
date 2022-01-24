import { getGift } from "../../helpers/getGift";

describe("<getGift /> testing", ()=>{

  test("1. Should get 10 elements", async ()=>{

    const gifts = await getGift('Matrix');

    expect(gifts.length).toBe(10);
  });

  test("2. Should get 0 elements / empty array without category", async ()=>{

    const gifts = await getGift('');

    expect(gifts).toEqual([]);
    expect(gifts.length).toBe(0);
  });


})