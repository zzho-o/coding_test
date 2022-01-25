const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const solution = input => {
    const [N,M] = input[0].split(' ').map(item => +item);
    input.shift();
    result = 0;
    for(let i = 0; i < N; i++){
        const data = input[i].split(' ').map(item => +item);
        // const min_val = Math.min(...data);
        // result = Math.max(result,min_val)
        let min_val = 10001;
        for(let a of data){
            min_val = Math.min(min_val,a)
            console.log(min_val)
        }

        // result = Math.max(result,min_val)
    }
    console.log(result)
}
solution(input);