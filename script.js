function fn(){
    alert("Button is Clicked");    
}
// Out display > console/terminal
console.log('Hello');
//Glbal variables

const vari= "Adil Ahmed";
console.log("This is the value of vari : "+vari);

let a = 1
console.log("This is the value of a " + a);

let b;
b= 30;
//-----------------Scope of the variable--------------------------

function fn() {
    let local = 1;
    console.log('This is my local variable:  '+local);
    
    console.log("This is my global variable: "+b);
}
fn();

