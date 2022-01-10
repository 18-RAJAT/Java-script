let obj = 
{
    name:"UNKNOWN",
    add:
    {
        country:"ABC",
        state:
        {
            code:"91",
            pin:"123451"
        }
    } 
}
//spread the obj
// let obj2= {...obj}; //>>that is called shallow copy...!!




//spread add...!!
// let obj2= {...obj,add:{...obj.add}};




//now spread the state code...
//this is the deep copy...
let obj2 = {...obj,add:{...obj.add,state:{...obj.add.state}}}; 




//new object to insert and update it 
obj2.add.country = "XYZ";

obj.add.state.code = "+01";

console.log(obj);
console.log(obj2);
