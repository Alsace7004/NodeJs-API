
const {format} = require('date-fns');
const {v4:uuid} = require('uuid');

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))

console.log('different id everytime :',uuid());

//8.3.2 ||Major version|Minor Version|Path
//^ || go ahead & update Minor/Patch version but not Major Version
//tilde || update inly Patch Version
console.log('Thanks')