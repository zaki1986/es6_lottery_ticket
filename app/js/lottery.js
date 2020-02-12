import './lottery/base';
import './lottery/timer.js';
import './lottery/calculate';
import './lottery/interface';

{
  const arr = [1, 2, 3, 4, 5,6,7,8,9,10,11];
  let n = arr.length;
  let m = 5,
    sum = 1,
    dem = 1;

  for (let i = 1; i <= m; i++) {
    sum = sum * n;
    n--;
    dem = dem * i;
  }

  console.log(sum / dem);
}