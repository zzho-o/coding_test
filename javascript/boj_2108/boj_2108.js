const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => +item.trim());
// const solution = input => {
//     const c = +input.shift();
//     const num = input;
//     const nums = {}
//     const one = Math.round((num.reduce((acc,cur) => +acc+ +cur))/c)
//     let sort = input.sort((a,b) => a-b);
//     sort.sort((a,b) => a-b);
//     const two = sort[Math.floor(c/2)];
//     let three;
//     for(let i = 0; i < c; i++){
//         if(nums[num[i]]){
//             nums[num[i]]++;
//         }else{
//             nums[num[i]] = 1;
//         }
//     }
//     let maxNum = Math.max(...Object.values(nums))
//     let maxNumarr = [];
//     for(let num in nums){
//         if(nums[num] === maxNum){
//             maxNumarr.push(+num)
//         }
//     }
//     if(maxNumarr.length > 1){
//         maxNumarr = maxNumarr.sort((a,b) => a - b);
//         three = maxNumarr[1];
//     }
//     else{
//         three = maxNumarr[0];
//     }
//     const four = Math.max(...sort) - Math.min(...sort);
//     console.log([one,two,three,four].join('\n'));
// }
// solution(input);
input = input.map(item => +item)
const N = input.shift();
const sortedNumArr = input.sort((a, b) => a - b);
const numMap = {};

for (let num of sortedNumArr) {
  if (numMap[num]) {
    numMap[num] = numMap[num] + 1;
  } else {
    numMap[num] = 1;
  }
}

let hitMaxNum = Math.max.apply(null, Object.values(numMap));
let hitMaxNumArr = [];
let hitMaxNumResult = 0;
for (let numKey in numMap) {
  if (numMap[numKey] === hitMaxNum) {
    hitMaxNumArr.push(numKey);
  }
}

if (hitMaxNumArr.length > 1) {
  hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
  hitMaxNumResult = hitMaxNumArr[1];
} else {
  hitMaxNumResult = hitMaxNumArr[0];
}

const avg = Math.round(input.reduce((acc, num) => (acc += num), 0) / N);
const center = input[Math.floor(input.length / 2)];
const maxSubMin = sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0];

console.log(avg);
console.log(center);
console.log(hitMaxNumResult);
console.log(maxSubMin);