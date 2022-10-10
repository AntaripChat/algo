function swap(arr,a,b){
    let tem = arr[a];
    arr[a] = arr[b];
    arr[b] = tem;
}

function selectionsort(arr,n){
    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i] > arr[j]){
                swap(arr,i,j)
            }
        }
    }
}

let arr = [2,1,4,3];
let n = arr.length;

console.log(arr);

selectionsort(arr,n);

console.log(arr);