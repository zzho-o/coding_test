const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function cnt_by_value(arr,x){
    const n = arr.length
    const a = first(arr,x,0,n-1)
    if(a === -1){
        return 0
    }
    b = last(arr,x,0,n-1)

    return b - a + 1
}

function first(arr,target,start,end){
    if(start>end){
        return -1
    }
    const mid = Math.floor((start+end)/2)
    if (mid === 0 || target > arr[mid - 1] && arr[mid] === target){
        return mid
    }
    else if(arr[mid] >= target){
        return first(arr,target,start,mid - 1)
    }
    else{
        return first(arr,target,mid + 1, end)
    }
}

function last(arr,target,start,end){
    if(start > end){
        return -1
    }
    const mid = Math.floor((start+end)/2)
    if(mid === arr.length-1 || target < arr[mid+1] && arr[mid] === target){
        return mid
    }
    else if(arr[mid] > target){
        return last(arr,target,start,mid-1)
    }
    else{
        return last(arr,target,mid+1,end)
    }
}

function solution(input){
    'use strict'
    const [n,x] = input.shift().split(' ').map(item => +item)
    const arr = input.shift().split(' ').map(item => +item)
    let l = 0
    let r = arr.length-1
    const cnt = cnt_by_value(arr,x)

    cnt === 0 ? console.log(-1) : console.log(cnt)
}
// 7 2
// 1 1 2 2 2 2 3