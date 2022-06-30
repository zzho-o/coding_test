const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function solution(input){
    'use strict'
    const [n,c] = input.shift().split(' ').map(item => +item)
    const house = []
    while(input.length){
        house.push(+input.shift())
    }
    house.sort((a,b) => a - b) //이진 탐색 사전 작업
    let start = 1 //최소 거리(min gap)
    let end = house[house.length-1] - house[0] //최대 거리(max gap)
    let result = 0
    let mid,value,cnt;

    while(start <= end){
        mid = Math.floor((start+end) / 2) // mid == 가장 인접한 두 공유기 거리(gap) 의미
        value = house[0]
        cnt = 1
        //현 mid 값 이용하여 공유기 설치
        for(let i = 0; i < n; i++){//앞에서부터 차근차근 설치
            house[i] >= value + mid ? (value = house[i])&&cnt++ : null
        }
        //c개 이상 공유기 설치할 수 있는 경우, 거리 증가
        //없는 경우 거리 감소
        cnt >= c ? (start = mid + 1)&&(result = mid) : end = mid - 1
    }
    console.log(result)
}
// 1 2 4 8 9