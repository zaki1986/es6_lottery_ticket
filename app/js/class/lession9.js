{
//Symbol
let a1 = Symbol();
let a2 = Symbol();
console.log(a1===a2) //false

let a4 = Symbol.for('a3');
let a5 = Symbol.for('a3');
console.log(a4===a5) //true
}

{
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]:'123',
    abc:'456',
    bcd:'789'
  }

  console.log(obj.abc)

  for(let [key,value] of Object.entries(obj)) {
    console.log([key,value])
  }//无法读取symbol的值

  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log('symbol的值',obj[item])
  })
}