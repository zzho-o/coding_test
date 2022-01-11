const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const solution = input => {
    let [N,M,K] = input[0].split(' ').map(item => +item);
    const nums = input[1].split(' ').map(num => +num);
    nums.sort((a,b) => a - b)
    const first = nums[N-1];
    const second = nums[N-2];

    result = 0;

    while(true){
        for(let i = 0; i < K; i++){ //가장 큰 수 k번 반복
            if(M === 0)break;
            result += first;
            M -= 1;
        }
        if(M === 0)break;
        result += second;
        M -= 1;
    }
    console.log(result)
}
solution(input);