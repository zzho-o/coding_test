const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const solution = input => {
    const n = +input[0];
    input.shift();
    const mov = input[0].split(' ')
    let [i,j] = [1,1];
    for(let b of mov){
        switch (b){
            case 'R':
                if(j == n)break;
                j++;
                break;
            case 'L':
                if(j == 1)break;
                j--;
                break;
            case 'U':
                if(i == 1)break;
                i--;
                break;
            case 'D':
                if(i == n)break;
                i++;
                break;
        }
        
    }
    console.log(i,j)
}
solution(input);