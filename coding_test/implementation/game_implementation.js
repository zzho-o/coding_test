const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
input = ['4 4','1 1 0','1 1 1 1','1 0 0 1','1 1 0 1','1 1 1 1'];
const [row,col] = input[0].split(' ').map(item => +item);
input.shift();
let cur_plc_dir = input[0].split(' ').map(item => +item);
input.shift();
const dx = [-1,0,1,0];
const dy = [0,1,0,-1];
const g_map = []
while(input.length){
    //0은 육지, 1은 바다
    const tmp_col = input[0].split(' ').map(item => +item);
    g_map.push(tmp_col)
    input.shift();
}
const checked = new Array(g_map.length)
for(let i = 0; i < g_map.length; i++){
    const tmp = new Array()
}
const turn_left = (i,j,dir) => {
    let lf_dir;
    if(i === 0){
        lf_dir = 3;
    }
    else{
        lf_dir = dir - 1;
    }
}
const solution = input => {
    
    let checked = 0;
    while(true){
        
    }
}
// solution(input);