var arr = [10,29,35,40,50]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
 console.log("even numbers: ")
for (var j = 0; j < arr.length; j++) {
    if(arr[j]%2 === 0) {
        console.log(arr[j]);
    }
}

arr.push(80)
console.log("after push: ",arr)

arr.unshift(70);
console.log("after unshift: ",arr);