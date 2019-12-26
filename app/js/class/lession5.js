{
  // 二进制与八进制数
  console.log('0B二进制', 0B111110111);
  console.log('0o八进制', 0o767);
}

{
  // 是否是无穷尽数，是否是nan
  console.log('15', Number.isFinite(15));
  console.log('NaN', Number.isFinite(NaN));
  console.log('1/0', Number.isFinite(1 / 0));
  console.log('isNaN', Number.isNaN(NaN));
  console.log('15', Number.isNaN(15));
}

{
  // 是否为整数
  console.log('25', Number.isInteger(25));
  console.log('\'25\'', Number.isInteger('25'));
  console.log('25.0', Number.isInteger(25.0));
  console.log('25.1', Number.isInteger(25.1));
  console.log('NaN', Number.isInteger(NaN));
  console.log('null', Number.isInteger(null));
}

{
  // jS支持的最大和最小数
  console.log('最大数', Number.MAX_SAFE_INTEGER);
  console.log('最小数', Number.MIN_SAFE_INTEGER);

  console.log('10000000', Number.isSafeInteger(10000000));
  console.log('2^25', Number.isSafeInteger(Math.pow(2, 53)));
  console.log('-2^25', Number.isSafeInteger(Math.pow(2, -53)));
}

{
  // 取整
  console.log(0.1 + 0.2);
  console.log(Math.trunc(0.1 + 0.2));
  console.log(Math.trunc(3.141592653));
}

{
  // 判断正负数或0  //1,-1,0,NaN
  console.log(Math.sign(-5));
  console.log(Math.sign(0));
  console.log(Math.sign(5));
  console.log(Math.sign('10'));
  console.log(Math.sign('ABC'));
  console.log(Math.sign(NaN));
}