const fs = require('fs');
const { exit } = require('process');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
class Stack {
    static #num = 1;
    static #asw = '';
    static #Stack = [];
    static next_num() {
        return this.#num;
    }
    static push_pop(N){
        while(this.#num <= N){
            this.#Stack.push(this.#num);
            this.#asw += '+\n'
            this.#num++;
        }
        this.#Stack.pop();
        this.#asw += '-\n';
    }
    static top(){
        return this.#Stack[this.#Stack.length-1];
    }
    static pop() {
        this.#Stack.pop();
        this.#asw += '-\n';
    }
    static asw(){
        return this.#asw;
    }
}
const solution = (input) => {
    function No(){
        console.log("NO");
        exit(0);
    }
    const testCase = input.shift();
    while(input.length){
        const num = +input.shift();
        num === Stack.top() ? Stack.pop() :
        num >= Stack.next_num() ? Stack.push_pop(num) : No();
    }
    console.log(Stack.asw())
}
solution(input);