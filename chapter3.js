// console.log("hello")

// data-types
// let a = 10;
// console.log(a);

// //type of()
// console.log(typeof(a));

// a= 'z';
// console.log(typeof(a));

// let b = true;
// console.log("The value of b is " +b );


// -----Objects------

// let obj ={
//     // key:   values
//     userName :" Adil Ahmed",
//     rollNumber: 2,
//     school: " SDA"
// };
// console.log(obj.userName);

// obj.userName = "adi adil"
// console.log(obj.userName);
// console.log(obj);
// console.log(obj.rollNumber);
// console.log(obj['school']);

//----------Destructuring-------------

// const {userName, rollNumber, school} = obj;
// console.log(userName);
// console.log(school);
// console.log(rollNumber);
// console.log(obj);

// 2nd Method-----> new keyword

// const obj2 = new Object();

// // objectName.key = value;
// obj2.address = "Newtown AA3"
// obj2.postOffice = "Pathorghata";

// console.log(obj2);
// console.log(obj2.address);


//Methods in object

//1. Assign method

// Object.assign(obj2, obj);

// console.log(obj2);

//2. Freeze method

// Object.freeze(obj);

// obj.userName = "Adi Adi";
// console.log(obj.userName);

// 3. Keys ()
// console.log(Object.keys(obj));


// 4. Values()
// console.log(Object.values(obj));

// --------Arrays--------

let arr1 = [1,2,3,4,5,"Adil", false];
// console.log(arr1);

// Manipulate

// console.log('Element at index 5 is: '+arr1);

arr1[5] = "Ahmed";


// console.log("Element at index 6 is: "+arr1[5]);
// console.log("Element at index 7 is: "+arr1[6]);

let arr2=[];
arr2.push(32);
arr2.push(3221);
arr2.push(32132);
arr2.push(321);
// console.log(arr2);
arr2.pop();
// console.log(arr2);

let arr3 = new Array(1,2,3,4);
// console.log(arr3);

// concat

let arr4 = arr3.concat(arr2);
// console.log("New concatinated Array is: "+arr4);

//slice

let arr5 = arr4.slice(3,7);
// console.log(arr5);

//indexOf()

// console.log('the index of 32 in arr5 is: '+arr5.indexOf(32));

// join()

let temp = arr5.join("-");
// console.log(temp);
// console.log(typeof(temp));

//sort

const alpha = ['a','b','x','d','A','z','Z'];
console.log("The sorted array is :" + alpha.sort());

let anum = [1,3,7,2,312,34,12,18];
console.log('The sorted anum array is :'+ anum.sort());
console.log('The sorted anum array is :'+ anum.sort((a,b)=>a-b));
