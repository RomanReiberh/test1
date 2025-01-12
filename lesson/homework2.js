function proga(num) {
var item = 1;
for(let a = 0; a < num.length; a++){
    item *= num[a]
 }
 return item
}
var myNumber = [3,17,62,35,23];
var result = proga(myNumber);
console.log("Произведение: ", result);






var ages = [32,55,23,52];
var sum = 0;
var i = 0;
while (i < ages.length) {
    sum += ages[i]
    i++
}
console.log(sum);






var pussy = [32,21,52,57];
var sum = 1;
var x = 0;
while(x < pussy.length){
    sum *= pussy[x]
    x++
} 
console.log(sum);