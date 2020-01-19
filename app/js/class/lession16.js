{
  // 类的修饰器
  let readyOnly = function (des) {
    des.writable = false;
    return des
  }

  class test {
    @readyOnly
    time() {
      return '2020-01-01'
    }
  }

  let dum = new test();

  // dum.time = function(){
  //   return '123'
  // }
  console.log(dum.time())
}

{
  let addName = function (target) {
    target.newName = 'text';
  }

  @addName
  class Test {

  }

  console.log('类修改器添加类名', Test.newName)
}

{
  let log = (type) =>{
    return function(target,name,descriptor){
      let src_method = descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        console.log(`log ${type}`);
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.log('ad is show')
    }
    @log('click')
    click(){
      console.log('ad is click')
    }
  }

  let ad = new AD();
  ad.show();
  ad.click();
}