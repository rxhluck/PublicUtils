import SyHealth from '../../src/index';

// console.log(SyHealth);
let _data = {
  a: 1,
  b: '111',
  c: '3231sssss'
}
console.log(SyHealth.dataUtils.getNumber(_data, 'c'));


let _data2 = {
  a: 1,
  b: '111',
  c: {
    name: 'rxhluck',
    age: 12
  }
}
console.log(SyHealth.dataUtils.getDeepValue(_data2, ['c', 'name']));

// SyHealth({}).request();
