function search(arr,ele){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] == ele){
                console.log(i,j);
                return 1;
            };
        };
    };

    return -1;

};

let arr =  [[1,2,3],
            [4,5,6],
            [7,8,9]];

let element = 4;

console.log(search(arr,element));