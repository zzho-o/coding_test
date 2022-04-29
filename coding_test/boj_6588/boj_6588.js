const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function aa(a){
    for(let i = 2; i < a; i++){
        if(a % i === 0){
            return false
        }
    }
    return true
}
function solution(input){
    let a;
    const asw = [];
    while(a = +input.shift()){
        let toggle = 1
        for(let i = 3;toggle !== 0 && i < a  ; i++){
            for(let j = a;toggle !== 0 && j > i; j--){
                if(aa(i) & aa(j)){
                    if(a === i + j)  {
                        asw.push(`${a} = ${i} + ${j}`)
                        toggle = 0
                    }    
                }
            }
        }
        toggle === 1 ? asw.push( "Goldbach's conjecture is wrong.") : null
    }
    console.log(asw.join('\n'))
}