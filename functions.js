// 4 types of functions
//functions without input and without return

function add() {
    var a = 10;
    var b = 20;
    console.log(a+b);
}
add();

//functions with input and without return

function sub(x,y) {
    console.log(x-y);
}
sub(100,20);

// functions without input and with return

function mul(){
    var p =300;
    var q =100;
    return p * q;
}
console.log(mul());

//functions with input and with return

function div(a,b) {
    return a/b
}
console.log(div(100,2));