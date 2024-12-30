function greet() {
    console.log('hello');
}
console.log(greet)

function identifyDataType(value) {
    if (value == null) return 'Null';
    if(Array.isArray(value)) return 'Array';
    console.log(typeof(value));
}
res=identifyDataType([12,434,546]);
console.log(res)


function iseven(number) {
    if(number %2==0) return console.log('true')
        else return console.log('false')
}
iseven(3);

function iseven2(number) {
    return number % 2 ==0
}
res=iseven2(1)
console.log(res)