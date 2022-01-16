const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const arr = [5,7,9,0,3,1,6,2,4,8]
const Quick_sort = (arr,start,end) => {
    if(start >= end)return;
    const pivot = start;
    let left = start + 1;
    let right = end;
    while(left <= right){
        while(left <= end && arr[left] <= arr[pivot]){
            left++;
        }
        while(right > pivot && arr[right] >= arr[pivot]){
            right--;
        }
        if(left > right)[arr[right],arr[pivot]] = [arr[pivot],arr[right]];
        else[arr[left],arr[right]] = [arr[right],arr[left]];
    }
    Quick_sort(arr,start,right-1);
    Quick_sort(arr,right+1,end);
}
const solution = input => {
    //Hoare Partition = 첫 번째 요소를 피벗으로 잡는다.
    Quick_sort(arr,0,arr.length-1);
    console.log(arr)
}
solution(input);