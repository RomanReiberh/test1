function let(num1, num2=4) {
return num1 + num2
}
console.log(let(3));



var numbers = [3,13,52,73,13];
function calculateSum(arr) {
var sum = 0;
for(let i = 0; i < arr.length; i++) {
sum = sum + arr[i]
}
console.log(sum)
}
calculateSum(numbers)




var students = [
    {Name:'Ivan', Age:23, Course:'Math'},
    {Name:'Andrey', Age:21, Course:'Biology'},
    {Name:'Sergey', Age:22, Course:'Chemistry'}
];
function displayStudentInfo (student) {
console.log("Name:" + student.Name);
console.log("Age:" + student.Age);
console.log("Course:" + student.Course);
}
for(var s = 0; s < students.length; s++) {
    displayStudentInfo(students[s]);
    console.log("-----------------");
}




var sounds = [
    {name:"Back in Blakc", minuts:"3.47min", compositor:"AC/DC"},
    {name:"TNT", minuts:"4.01min", compositor:"AC/DC"},
    {name:"Highway to Hell", minuts:"3.57min", compositor:"AC/DC"},
];
function lateSounds(sound) {
console.log("Name: " + sound.name);
console.log("Duration: " + sound.minuts );
console.log("Executor: " + sound.compositor);
}
for(var x = 0; x < sounds.length; x++) {
lateSounds(sounds[x]);
console.log("////////////////////////")
}