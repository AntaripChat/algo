function search(arr,num,len){
    let i = 0; j = len - 1;
    while(i < num && j >= 0){
        if(arr[i][j] == num){
            return 1;
        };
        if(arr[i][j] > num){
            j --;
        }else{
            i++;
        }
    };

    return 0;
};

let arr = [[1,2,3],[4,5,6],[7,8,9]];

let num = 6;
console.log(search(arr,num,3));