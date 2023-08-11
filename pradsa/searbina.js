
function search(mat,n,x){
         
    // set indexes for top right
    let i = 0, j = n - 1;
    // element
 
    while (i < n && j >= 0)
    {
        if (mat[i][j] == x)
        {
            //console.log("Element found at " +i + " " + j);
            return 1;
        }
        if (mat[i][j] > x)
            j--;
        else // if mat[i][j] < x
            i++;
    }
 
    //console.log("n Element not found");
    return 0; 
}
// driver program to test above function
     
let mat =     [[10, 20, 30, 40 ],
                [ 15, 25, 35, 45 ],
                [ 27, 29, 37, 48 ],
                [ 32, 33, 39, 50 ]];
 
console.log(search(mat, 4, 29));