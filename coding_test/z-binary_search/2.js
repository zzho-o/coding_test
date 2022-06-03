const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function bi_search(arr,start,end){
    if(start > end)return -1
    const mid = Math.floor((start+end)/2)
    if(arr[mid] === mid)return mid
    else if(arr[mid] < mid)return bi_search(arr,mid+1,end)
    else return bi_search(arr,start,mid-1)
}

function solution(input){
    'use strict'
    const n = +input.shift()
    const nums = input.shift().split(' ').map(item => +item)
    const asw = bi_search(nums,0,nums.length)
    console.log(asw)
}
// 7
// -15 -4 3 8 9 13 15