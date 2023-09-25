// [[1,2,3],[4,5,6],[7,8,9]]     
// 1,2,3,4,5,6,7,8,9 
//1,4,7,2,5,8,3,6,9
// O(n^2)


// function print(arr){

//     let arr2 = [];
//     let col = 3;

//     for(let i = 0; i < col  ; i++){
//         for(let j = 0; j < col ; j++){
//             arr2.push(arr[i][j]);
//         };
//     };

//     return arr2;
// }





// let arr = [[1,2,3],[4,5,6],[7,8,9]]  

// console.log(print(arr));


// function print(arr){

//     let arr2 = [];
//     let col = arr.length;

//     for(let i = 0; i < col; i++){
//         for(let j =0; j < col; j++){
//             arr2.push(arr[j][i])
//         };
//     };

//     return arr2;


// }

// let arr = [[1,2,3],[4,5,6],[7,8,9]] ;

// console.log(print(arr))






// 3,2,1,6,5,4,9,8,7


// function print(arr){

//     let arr2 = [];
//     let col = arr.length;

//     for(let i = 0; i < col ; i ++ ){
//         for(let j = col-1; j >= 0;j-- ){
//             arr2.push(arr[i][j]);
//         };
//     };

//     return arr2;
    
// };

// let arr = [[1,2,3],[4,5,6],[7,8,9]] ;

// console.log(print(arr));

// console.log(arr[0][2]);
// console.log(arr[0][1]);
// console.log(arr[0][0]);


function print(arr){

    let arr2 = [];
    let col = arr.length;

    for(let i= 0; i < col; i++){
        if(i%2==0){
            for(let j = 0;j<col;j++){
                arr2.push(arr[j][i]);
            };
        }else{
        for(let j = col-1;j>= 0;j--){
            arr2.push(arr[j][i]);
        };
    }
    };

    return arr2;
    
};


let arr = [[1,2,3],[4,5,6],[7,8,9]] ;

console.log(print(arr));

