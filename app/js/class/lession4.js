{
  console.log('a','\u{29BB7}')
}

{
  let s="𩮷";
  console.log('length',s.length);
  console.log('es5_at0',s.charAt(0));
  console.log('es5_at1',s.charAt(1));
  console.log('es5_codeat0',s.charCodeAt(0));
  console.log('es5_codeat1',s.charCodeAt(1));

  let s1="𩮷a";
  console.log('length',s1.length);
  console.log('es6_codeat0',s1.codePointAt(0));
  console.log('es6_codeat0',s1.codePointAt(0).toString(16));//{29BB7}𩮷
  console.log('es6_codeat1',s1.codePointAt(1));
  console.log('es6_codeat1',s1.codePointAt(2));
}

{
  console.log('es5',String.fromCharCode('0x29bb7'));
  console.log('es6',String.fromCodePoint('0x29bb7'));
}

{
  let str = '\u{29bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }

  for(let code of str) {
    console.log('es6',code);
  }
}