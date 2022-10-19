function binarySearch(arr,s,n,key){
    let mid = Math.floor((n+s)/2);
    if(key == arr[mid]){
        return mid;
    }
    if(key > arr[mid]){
        return binarySearch(arr,mid+1,n,key);
    }
    if(key < arr[mid]){
        return binarySearch(arr,s,mid-1,key);
    }
}

let arr = [1,2,3,4,5,6];

let n  = arr.length;

console.log(binarySearch(arr,0,n-1,4));