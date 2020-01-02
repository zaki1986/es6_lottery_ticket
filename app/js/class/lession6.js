{
  let list = Array.from(document.querySelectorAll('li'));
  list.forEach(function (item) {
    console.log(item.innerText);
  })

  console.log(Array.from([1, 2, 3], function (item) {
    return item * 2
  }))
}

{
  console.log([1, 2, 3, 4, NaN, undefined, [1, 2, 3]].fill('1'));
  console.log([1, 2, 3, 4, NaN, undefined, [1, 2, 3]].fill('1', 1, 3));
}

{
  for (let index of ['a', 'b', 'c'].keys()) {
    console.log(index)
  }
  for (let value of ['a', 'b', 'c'].values()) {
    console.log(value)
  }
  for (let [index, value] of ['a', 'b', 'c'].entries()) {
    console.log(index, value)
  }
}

{
  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(1, 5, 7))
}

{
  console.log([1, 2, 3, 4, 5].find(item => item > 3));
  console.log([1, 2, 3, 4, 5].findIndex(item => item > 3));
  console.log([1, 2, 3, '4', '5'].find(item => item > 3));
  console.log([1, 2, 3, '4', NaN].find(item => item == NaN)); //undefined

  console.log([1, 2, 3, '4', NaN].includes(NaN));
  console.log([1, 2, 3, '4', NaN].includes(4)); //false
}