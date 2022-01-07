// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item)
// const [x,y] = [input[0],input[1]]
// x > 0 && y > 0 ? console.log(1) : 
// x < 0 && y > 0 ? console.log(2) :
// x < 0 && y < 0 ? console.log(3) :
// console.log(4);
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input = input.map((item) => +item);
    solution(input[0],input[1])
    process.exit();
})
function solution(x,y){
    x > 0 && y > 0 ? console.log(1) : 
    x < 0 && y > 0 ? console.log(2) :
    x < 0 && y < 0 ? console.log(3) :
    console.log(4);
}
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// let input = [];
// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
//     solution(input[0],input)
//     process.exit();
// })