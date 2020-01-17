{
  // 基本异步定义
  let ajax = function (back) {
    console.log('start!');
    setTimeout(() => {
      console.log('middle...');
      back && back.call()
    }, 3000);
  }

  ajax(() => {
    console.log('end')
  })
}

{
  function timeout(ms) {
    return new Promise((resolve,reject) => {
      setTimeout(resolve,ms,'done');
    })
  }

  timeout(1000).then ((value) => {
    console.log(value)
  })
}

{
  let ajax = function () {
    console.log('timeout1');
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve()
      }, 1000);
    })
  }

  ajax()
    .then(function () {
      return new Promise(function (resolve, reject) {
        console.log('timeout2')
        setTimeout(() => {
          resolve()
        }, 2000);
      })
    })
    .then(function () {
      console.log('timeout3')
    })
}


{
  // catch监听错误
  let ajax = function (num) {
    return new Promise(function (resolve, reject) {
      if (num > 5) {
        resolve()
      } else {
        reject('数值太小')
      }
    })
  }

  ajax(6).then(function () {
    console.log('resolve', 6)
  }).catch(function (err) {
    console.log(err)
  })

  ajax(3).then(function () {
    console.log('resolve', 3)
  }).catch(function (err) {
    console.log('catch reject', err)
  })
}

{
  // 加载完再显示
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      }
      img.onerror = function () {
        reject(src + ' is unload!')
      }
    })
  }

  function showImg(imgs) {
    imgs.forEach(img => {
      document.body.appendChild(img);
    });
  }

  Promise.all([
    loadImg('https://d2x7souugjz072.cloudfront.net/Vendors/lafashionshows/ProductImage/list/11831297_e8a6b45e-1b75-4f8e-810b-a37abaa656b0.jpg'),
    loadImg('https://d2x7souugjz072.cloudfront.net/Vendors/lafashionshows/ProductImage/list/11831282_c3400530-bd96-4b04-8a2d-f0dd09d150ad.jpg'),
    // loadImg('https://d2x7souugjz072.cloudfront.net/Vendors/lafashionshows/ProductImage/list/error.jpg'),
    loadImg('https://d2x7souugjz072.cloudfront.net/Vendors/lafashionshows/ProductImage/list/11830979_81652112-f670-4273-b515-90c3d283ca62.jpg'),
  ])
  .then(showImg)
}

{
  // 先到先显示唯一图片
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      }
      img.onerror = function () {
        reject(src + ' is unload!')
      }
    })
  }

  function showImg(img) {
    document.body.appendChild(img);
  }

  Promise.race([
      loadImg('https://d2x7souugjz072.cloudfront.net/Vendors/lafashionshows/ProductImage/list/11831297_e8a6b45e-1b75-4f8e-810b-a37abaa656b0.jpg'),
      loadImg('https://d2x7souugjz072.cloudfront.net/Vendors/lafashionshows/ProductImage/list/11831282_c3400530-bd96-4b04-8a2d-f0dd09d150ad.jpg'),
      // loadImg('https://d2x7souugjz072.cloudfront.net/Vendors/lafashionshows/ProductImage/list/error.jpg'),
      loadImg('https://d2x7souugjz072.cloudfront.net/Vendors/lafashionshows/ProductImage/list/11830979_81652112-f670-4273-b515-90c3d283ca62.jpg'),
    ])
    .then(showImg)
}