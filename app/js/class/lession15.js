{
  // generator 基本定义 (需要：babel-polyfill)
  let gen = function* () {
    yield 'A';
    yield 'B';
    yield 'C';
    return 'D';
  }

  let gentor = gen();
  console.log(gentor.next());
  console.log(gentor.next());
  console.log(gentor.next());
  console.log(gentor.next());
  console.log(gentor.next());
}

{
  let obj = {};
  obj[Symbol.iterator] = function* () {
    yield 'A';
    yield 'B';
    yield 'C';
    return 'D';
  }

  for (let value of obj) {
    console.log(value);
  }
}

{
  let gen = function* () {
    while (1) {
      yield 'A';
      yield 'B';
      yield 'C';
      //return 'D';
    }
  }

  let gentor = gen();
  console.log(gentor.next());
  console.log(gentor.next());
  console.log(gentor.next());
  console.log(gentor.next());
  console.log(gentor.next());
  console.log(gentor.next());
  console.log(gentor.next());
}

// {
//   let gen =  function () {
//     while (1) {
//       yield 'A';
//       yield 'B';
//       yield 'C';
//       //return 'D';
//     }
//   }

//   let gentor = gen();
//   console.log(gentor.next());
//   console.log(gentor.next());
//   console.log(gentor.next());
//   console.log(gentor.next());
//   console.log(gentor.next());
//   console.log(gentor.next());
//   console.log(gentor.next());
// }

{
  // 模拟抽奖次数
  let lottery = function (count) {
    let num = document.getElementById('number');
    num.innerHTML = `剩余${count}次`;
  }

  let start = function* (count) {
    while (count > 0) {
      count--;
      yield lottery(count);
    }
  }

  let doit = start(5);
  let btn = document.getElementById('begin');
  btn.addEventListener('click', function () {
    doit.next()
  }, false)
}

{
  // 长轮询
  let ajax = function* () {
    yield new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({
          count: 1
        })
      }, 500)
    })
  }

  let pull = function () {
    let generator = ajax();
    let step = generator.next();
    step.value.then(function (d) {
      if (d.count != 0) {
        setTimeout(function () {
          console.log('getting...');
          pull();
        }, 500);
      } else {
        console.log(d);
      }
    })
  }

  pull();
}