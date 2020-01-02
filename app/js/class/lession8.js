{
  // 简洁语法
  let o = 'o';
  let k = 'k';

  let es5 = {
    o: o,
    k: k
  }

  let es6 = {
    o,
    k
  }
  console.log(es5, es6)

  let es5_method = {
    hello: function () {
      return 'hello'
    }
  }

  let es6_method = {
    hello() {
      return 'hello'
    }
  }
  console.log(es5_method.hello(), es6_method.hello())
}

{
  // new API
  console.log('比较字符串',Object.is('aaa','aaa'),'aaa'==='aaa')
  console.log('比较数组',Object.is([],[]),[]===[])

  console.log('对象复制',Object.assign({a:'a'},{b:'b'}))

  let test = {a:'a',b:'b'};
  for(let [key,values] of Object.entries(test)){
    console.log([key,values])
  }
}

{
  // 扩展运算符(暂时浏览器还不支持)
  //let {a,b,...c} = {a:'test1',b:'test2',c:'test3',d:'test4'}
  
}