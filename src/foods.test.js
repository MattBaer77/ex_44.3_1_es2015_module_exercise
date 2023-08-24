import foods from './foods'

// TEST FOODS

test('foods - SUCCESS - foods is array of foods', () => {

    const f = foods;

    expect(f).toEqual([
        "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
        "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑",
      ])
})