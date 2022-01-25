const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const solution = input => {
    const c = +input[0];
    input.shift();
    const user = [];
    const user_age = new Set()
    for(let i = 0; i < c; i++){
        const [age,name] = input[i].split(' ');
        user.push({age:+age,name:name});
        user_age.add(+age);
    }
    let user_list = [];
    while(user_age.size){
        const min_age = Math.min(...user_age);
        user_age.delete(Math.min(...user_age));
        for(let i of user){
            if(i.age === min_age){
                user_list.push(i);
            }
        }
    }
    for(let i = 0; i < c; i++){
        console.log(`${user_list[i].age} ${user_list[i].name}`)
    }
}
solution(input);