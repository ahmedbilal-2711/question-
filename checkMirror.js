


function checkIfMirror(arr) {
    let check = false;
    for (let l = 0; l < arr.length; l++) {
        let arrIn = arr[l];
        let j =arrIn.length-1;
        for (let i = 0; i < j; i++) {
            if (arrIn[i]!==arrIn[j]) {
                check = false;
                return false;
            }else{
                check=true;
            }
            j--;
        }
    }
    return true;
}
console.log(checkIfMirror([[1, 5, 9, 5, 1],
    [2, 2],
    [3,-9,-9, 3]]));
console.log(checkIfMirror([[10, 5, 6, 5, 10],
        [2, 2],
        [3, 19, 19, 7]])); 
console.log(checkIfMirror([[10, 5, 16, 15, 100, 15, 16, 5, 10],
        [2, 20, 20, 2],
        [3, 19, -19, -177, -19, 19, 3],
        [-9,-9,-9,-9,-9,-9,-9]]));