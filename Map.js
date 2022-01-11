let arr=[1,2,3,4,5];

let new_arr =[];


//normal methood...!!
// for(let i=0;i<arr.length;++i)
// {
//     new_arr[i] = arr[i] * 2;
// }


new_arr = arr.map((value,idx)=>
{
  // 1.argument value and 2. argument is index
  console.log(value,idx);
  
  return value*2; 
})
console.log(arr);
console.log(new_arr);