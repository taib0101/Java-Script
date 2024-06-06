// //recursion

function merge_sort(mer,l,r)
{
    let mid = Math.floor((l + r) / 2);
    if(l == r)
        return;
    merge_sort(mer,l,mid);
    merge_sort(mer,mid+1,r);
    
    let temp = Array.from({length : r+1});
    for(let i = l, j = mid+1, k = l; k <= r; ++k)
    {
        if(i == mid + 1)
            temp[k] = mer[j++];
        else if(j == r+1)
            temp[k] = mer[i++];
        else if(mer[i] >= mer[j])
            temp[k] = mer[j++];
        else
            temp[k] = mer[i++]; 
    }
    for(let i = l; i <= r; ++i)
        mer[i] = temp[i];
}

let arr = [40,20,10,30,50,5];
let l = 0, r = arr.length - 1;
merge_sort(arr,l,r);
console.log(arr.reverse().join(" "));
