//function declaration
function greet1(name) {
    return `hello, ${name}`
}
console.log(greet1('maneesha'))

//function expression
let greet2 = function(name) {
    return `hello, ${name}`;
}
console.log(greet2('maneesha'))

//arrow function
let greet3 = (name) => {
    return `hello, ${name}`
}
console.log(greet3('maneesha'))