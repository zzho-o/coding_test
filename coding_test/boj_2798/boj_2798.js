const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
let solution = input => {
    const c = +input[0];
    for(let i = 1;i < c;i++){
        const s_num = i.toString();
        let sum = i;
        for(let j = 0; j < s_num.length; j++){
            sum += +s_num[j];
        }   
        if(sum === c){
            console.log(i);
            break
        }
    }
}
solution(input);