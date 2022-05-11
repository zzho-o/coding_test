function rotate_matrix_by_90_degree(arr) {
    const n = arr.length
    const m = arr[0].length
    const result = Array.from(new Array(n),() => new Array(m).fill(0))
    for(let i = 0 ; i < n;i++){
        for(let j = 0 ; j < m; j++){
            result[j][n - i - 1] = arr[i][j];
        }
    }
    return result
}

function check(new_lock){
    const lock_len = Math.floor(new_lock.length / 3)
    for(let i = lock_len; i < lock_len*2;i++){
        for(let j = lock_len; j < lock_len*2;j++){
            if (new_lock[i][j] !== 1){
                return false
            }
        }
    }
    return true
}

function solution(key, lock) {
    const m = key.length;
    const n = lock.length;
    const new_lock = Array.from(new Array(n*3),() => new Array(n*3).fill(0))
    for(let i = 0; i < n; i++){
        for(let j = 0 ; j < n; j++){
            new_lock[i+n][j+n] = lock[i][j]
        }
    }
    for(let a = 0; a < 4; a++){
        const rot_key = rotate_matrix_by_90_degree(key)
        for(let x = 0; x < n*2; x++){
            for(let y = 0; y < n*2; y++){
                for(let i = 0; i < m; i++){
                    for(let j = 0; j < m; j++){
                        new_lock[x+ +i][y+ +j] += rot_key[i][j]
                    }
                }
                if (check(new_lock) == true){
                    return true
                }
                for(let i = 0; i < m; i++){
                    for(let j = 0; j < m; j++){
                        new_lock[x+ +i][y+ +j] -= rot_key[i][j]
                    }
                }
            }
        }
    }
    return false
}
console.log(solution([[0,0,0],[1,0,0],[0,1,1]],[[1,1,1],[1,1,0],[1,0,1]]))