// const fs = require('fs');
// const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
let input = ['21 4']
const solution = input => {
    let [N,K] = input[0].split(' ').map(item => +item);
    let cnt = 0;
    // while(N !== 1){ 요건 그리디
    //     if(N%K === 0){
    //         N /= K;
    //         cnt++;
    //     }
    //     else{
    //         N -= 1;
    //         cnt++;
    //     }
    // }
    // console.log(cnt)
    //수학적
    while(true){
        const target = Math.floor(N/K)*K;
        cnt += (N - target)
        N = target
        if(N<K)break; // K로 나눌수 없으면 반복문 나오기
        cnt += 1;//K로 나누기;
        N = Math.floor(N/K);
    }
    cnt += N - 1 //남은 수에 대해 1씩 빼기
    console.log(cnt)
}
solution(input);