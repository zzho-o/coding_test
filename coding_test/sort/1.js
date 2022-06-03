const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function solution(input){
    const n = +input.shift()
    const students = input.map(item => item.split(' '))
    students.sort((a,b) => +a[1] < +b[1] ? 1 : +a[1] > +b[1] ? -1 : 
                           +a[2] < +b[2] ? -1 : +a[2] > +b[2] ? 1 :
                           +a[3] < +b[3] ? 1 : +a[3] > +b[3] ? -1 :
                           a[0] < b[0] ? -1 : 1)
    let asw = ''
    for(let i of students){
        asw += i[0]+'\n'
    }
    console.log(asw)
}
// 12
// Junkyu 50 60 100
// Sangkeun 80 60 50
// Sunyoung 80 70 100
// Soong 50 60 90
// Haebin 50 60 100
// Kangsoo 60 80 100
// Donghyuk 80 60 100
// Sei 70 70 70
// Wonseob 70 70 90
// Sanghyun 70 70 80
// nsj 80 80 80
// Taewhan 50 60 90