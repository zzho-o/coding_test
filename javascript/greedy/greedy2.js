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
    //반복 수열 k+1 크기 배열 [f,f,f,s]
    //const count = Math.floor((M/(K+1))*k) 수열 반복 횟수 * k = first의 개수
    //const count += M%(K+1) 정확히 안 나눠졌을 때 나머지는 모두 큰 수임 정확히 나눠져야 second 포함됨
    //result += count*first 가장 큰 수 더하기
    //result += (m - count)*second -> count == first의 개수 then m - count == second 개수

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