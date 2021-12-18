// 連續
let obj = {a:{b:{c:2}}}

const {a:{b:{c}}} = obj
console.log(c);


// 連續加重名
let obj2 = {a:{b:{c:'Allen'}}}

const {a:{b:{c:who}}} = obj2
console.log(who);