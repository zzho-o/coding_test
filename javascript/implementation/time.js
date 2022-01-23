const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
input = [5];
const solution = input => {
    const Hour = +input[0];
    // let [HH,MM,SS,cnt] = [0,0,0,0]; //비효율적
    // while(HH !== c+1){
    //     SS++;
    //     if(SS === 60){
    //         MM++;
    //         SS = 0;
    //         if(MM === 60){
    //             HH++;
    //             MM = 0;
    //         }
    //     }
    //     const time = String(HH)+String(MM)+String(SS);
    //     if(time.includes('3')){
    //         cnt++;
    //     }
    // }
    // console.log(cnt);
    let cnt = 0;
    for(let i = 0; i < Hour+1; i++){
        for(let j = 0; j < 60; j++){
            for(let k = 0; k < 60; k++){
                if((String(i)+String(j)+String(k)).includes('3'))cnt++
            }
        }
    }
    console.log(cnt)
}
solution(input);