// Loops and functions

// let i = 0;
// do {
//     console.log(i);
//     i--;
       
// }
// while(i >= 0)


// FOR IN loop (only for objects i.e, for-in loop can't be used for arrays)

/*
const obj= {
    a:1,
    b:2,
    c:3,
};

for ( key in obj) {
    console.log(obj[key]);
    
        
    }

    */

    //For - OF loop in array

    /*
    const arr = [1,2,3,4,5,6,7];
    for (const i of arr) {
        console.log(i);

        
    }
        */

    //For - OF loop in objects

    /*
    const obt ={
        a:1,
        b:2,
        c:3,

    };

    for (const i of Object.keys(obt)) {
        console.log(obt[i]);
        
    }
        */

//Object.entries = [key,value];

    // const obj ={
    //     a:1,
    //     b:2,
    //     c:3,

    // };
    // for (let [key,value] of Object.entries(obj)) {
    //     console.log(key + ' ' + value);
        
        
    // }
//--------For Each lOop----------------
    const nums = [1,23,4,5]
   
    // nums.forEach(function (i) {
    //     console.log(i);
        
        
    // })

    
function numsArray (i) {
        console.log(i);
    }
    nums.forEach(numsArray);

    // ----------->Functions<-------------

    /* */

 /* 
    function add(a,b){
        let c = a*a*a;
        let d = b*b*b;
        let e = c+d;
        console.log(e);

        
    }
    add(1,3);
*/

function greet(i){
   return("hello " +i);
    
}

// const abc = greet("Adil Ahmed");

console.log(greet("Adil Ahmed"));


//-----------Arrow Function-----------

// const fun = () => {
//     console.log("Hi i am an arrow function")
// }


// const fun = (a,b) => {
//     console.log("Sum is: "+(a+b))
// }

const fun = (a,b) => {
    console.log("Sum is: "+(a+b))
}
fun(12,10);