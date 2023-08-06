function searcharr(arr,ele){
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while(r >= l){
        mid = l + Math.floor((r-l)/2);
        if (arr[mid] == ele){
            return mid;
        }
        if (arr[mid]>ele){
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    };
    return -1;
}



let arr = [1,2,3,6,7];

let element = 6;

console.log(searcharr(arr,element));


// for(let i = 0;i <  arr.length; i ++){
//     if(arr[i] == element){
//         console.log(i);
//     };
// };

