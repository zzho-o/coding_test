// function taskA(a,b){
//     return new Promise((resorve,reject) => {
//         setTimeout(() => {
//             const res = a + b;
//             resorve(res)
//         },3000);
//     })
    
// }
// function taskB(a){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = a * 2;
//             resolve(res)
//         },3000);
//     })
    
// }
// function taskC(a){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = a * -1;
//             resolve(res)
//         },3000);
//     })
    
// }

// taskA(5,1).then((a_res) => {
//     console.log("A result :",a_res);
//     return taskB(a_res);
// }).then((b_res) => {
//     console.log("B result :",b_res);
//     return taskC(b_res);
// }).then((c_res) => {
//     console.log("C result :",c_res);
// })

// // taskA(3,4,a_res => {
// //     console.log("task A :", a_res);
// //     taskB(a_res,b_res => {
// //         console.log("task B :",b_res);
// //         taskC(b_res,c_res => {
// //             console.log("task C :",c_res);
// //         })
// //     })
// // })
//;/////
function hello(){
    return 'hello';
}

async function helloAsync(){
    await delay(3000); // 비동기 함수가 동기처럼 사용 됨 and async 붙은 함수에서만 사용 가능
    return "hello async"
    // return delay(3000).then(() =>{
    //     return 'hello Async'
    // });
}

async function main() {
    const res = await helloAsync();
    console.log(res);
}
main()
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}