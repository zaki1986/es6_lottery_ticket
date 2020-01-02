{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(function () {
    return 3;
  })
  console.log(list)
}

{
  let arr = [1, 2, 'a', 4, 5, 6, '7', 'a', 7, 8, 9, 0]
  let list = new Set(arr);
  console.log(list)
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  console.log('delete', list.delete('add'))
  console.log(list)

  console.log('has', list.has('has'))
  console.log(list)

  console.log('clear', list.clear())
  console.log(list)
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.log('key', key)
  }

  for (let value of list.values()) {
    console.log('value', value)
  }

  for (let [key, value] of list.entries()) {
    console.log('entries', key, value)
  }

  list.forEach(item => console.log(item))
}

{
  let a = {
    test: 123
  };

  let b = {
    test: 123
  };
  let list = new WeakSet();

  list.add(a)
  list.add(b)

  console.log(list)
}

{
  let map = new Map();
  let arr = ['123'];

  map.set(arr, 789);
  console.log('map', map, map.get(arr))
}

{
  let map = new Map([
    ['a', 123],
    ['b', 456]
  ]);
  console.log('map args', map);
  console.log('size', map.size)
  map.forEach(item => console.log(item))
}

{
  let map = new WeakMap();

  let a={};
  map.set(a,123);
  console.log(map.get(a))
}