import SyHealth from '../../src/index';

console.log(SyHealth.date({
  format: 'YYYY-MM-DD HH:mm:ss',
  date: '2020/12/9',
}))

console.log(SyHealth.date({
  format: 'YYYY-MM-DD HH:mm:ss',
  date: 'sssssss',
}))

