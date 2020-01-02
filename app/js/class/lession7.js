{
  function test(x, y = 'es6') {
    console.log(x, y);
  }

  function test2(x, y = 'es6', c) {
    console.log('x:', x, 'y:', y, 'c:', c);
  }

  test();
  test('hello');
  test('hello', 123);

  test2('', '', 123);
}

{
  let x = 'test';

  function test3(x, y = x) {
    console.log('作用域', x, y);
  }

  test3();
  test3('abc');
}

{
  function test4(...args) {
    for (let v of args) {
      console.log('rest', v)
    }
  }

  test4(1, 2, 3, 'a', 'b', 'c')
}

{
  console.log('...', ...[1, 2, 3])
  console.log('...', 'a', ...[1, 2, 3], 'b')
}

{
  // 尾调用
  function fun1(v) {
    console.log(v)
  }

  function fun2(x) {
    fun1(x)
  }

  fun2(123);
}