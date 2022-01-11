let arr =["abc","xyz","aaf","total","awesome"];

let new_arr =[];

//normal for loop

// for(let i=0;i<arr.length;++i)
// {
//     let word = arr[i];
//     if(word.length>4)
//     {
//         new_arr.push(word)
//     }
// }




//using filter
new_arr=arr. filter(function(word)
{
    return word.length>5
})

console.log(arr);
console.log(new_arr);