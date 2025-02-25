function decir() {
    console.log("2");
}

console.log("1");
setTimeout(decir, 1000);
console.log("3");

for (let index = 0; index < 10000; index++) {
    console.log(index);
    
}