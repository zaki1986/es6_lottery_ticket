{
  console.log('----------------y修饰符--------------')
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;

  console.log('one',a1.exec(s), a2.exec(s));
  console.log('two',a1.exec(s), a2.exec(s));
  console.log('three',a1.exec(s), a2.exec(s));
  console.log('four',a1.exec(s), a2.exec(s));

  console.log(a1.sticky,a2.sticky)
  
}

{
  console.log('----------------u修饰符--------------')
  console.log('u-1',/\uD83D/.test('\uD83D\uDC2A'));
  console.log('u-2',/\uD83D/u.test('\uD83D\uDC2A'));

  console.log(/\u{61}/.test('a'));//flase 不支持ES6 unicode写法
  console.log(/\u{61}/u.test('a'));//true ES6 unicode写法

  console.log('\u{20BB7}');

  let ss='𠮷';
  console.log(/^.$/.test(ss));//flase 超出字符长度0xFFFF
  console.log(/^.$/u.test(ss));//true 

  console.log(/𠮷{3}/.test('𠮷𠮷𠮷𠮷𠮷'));//false 正则中本身字符超出0xFFFF
  console.log(/𠮷{3}/u.test('𠮷𠮷𠮷𠮷𠮷'));//true 
}

{
  // #正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符（line terminator character）除外
  // U+000A 换行符（\n）
  // U+000D 回车符（\r）
  // U+2028 行分隔符（line separator）
  // U+2029 段分隔符（paragraph separator）
  // 只是一个提案目前还不支持
  // let reg=/test.go/s;
  // console.log(reg.test('test\ngo'));
  // console.log(reg.test('test\ngo'));
  console.log('s变通方法',/foo.bar/.test('foo\nbar'));
  console.log('s变通方法',/foo[^]bar/.test('foo\nbar'));
}