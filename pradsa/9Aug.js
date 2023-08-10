// Qustion 

//     1 2 3
//     4 5 6
//     7 8 9

//     Ans 1 4 7 8 5 2 3 5 9 


function arrw(arr){

    let col = arr.length;

    let arr2 = [];

    for(let i = 0;i < col;i++){
        for(let j = col-1;j>=0 ;j--){
            arr2.push(arr[j][i]);
        }
    }

    return arr2;

};

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]];

console.log(arrw(arr));
//console.log(arr.length);

// for(let i = 0; i < arr.length;i++){
//     console.log(arr[i]);
// }

// let len = arr[0].length;

// console.log(len);

/*let arr2 = [];

arr2.push(arr[0][0],arr[1][0],arr[2][0]);

console.log(arr2);*/