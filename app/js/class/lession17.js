// 导出本模块中的相关数据
// 变量，函数，类
// 第一种方法
// export let vari = 'export text';

// export function fun() {
//   console.log('export function')
// }

// export class Test {
//   hello() {
//     console.log('export class')
//   }
// }

// 第二种方法
let vari = 'export text';

function fun() {
  console.log('export function')
}

class Test {
  hello() {
    console.log('export class')
  }
}

export default {
  vari,
  fun,
  Test
}