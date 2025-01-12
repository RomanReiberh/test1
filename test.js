sentencePart1 = 'Я люблю';
sentencePart2 = 'программирование';
completeSentence = (sentencePart1 + ' ' + sentencePart2 + '!')
console.log(completeSentence)










a = 3;
if(a>0){
    alert('Positive')
}
    else if(a<0){
    alert('Negative')
}   
      else{
        alert('0')
    }



str1 = "Good";
str2 = "Bad";
if (str1 === str2) {
    alert('Строки равны');}
else {
    alert('Строки не равны');}



var grade = 4;
    if(grade === 1) {
        alert('Ужасно');
    }
     else if(grade === 2) {
        alert('Неудовлетворительно');
    }
      else if(grade === 3) {
        alert('Удовлетворительно');
    }
       else if(grade === 4) {
        alert('Хорошо');
    }
        else if(grade === 5) {
        alert('Отлично');
    }
         else {
        alert('Неуч');
    }
    
   var month = 10;
   switch (month){
   case 12:
    case 1:
    case 2:
    console.log('winter');
      break;
   
   case 3:
    case 4:
    case 5:
    console.log('spring');
      break;
   
   case 6:
    case 7:
    case 8:
    
    console.log('summer');
    break;
    default:
    
    console.log('automn')
    break;
   }
  




   dayOfWeek = 3;
   switch (dayOfWeek){
   case 1:
    console.log('Monday');
      break;
   
   case 2:
    console.log('Tuesday');
      break;
   
   case 3:
    console.log('Wednesday');
    break;
   
    case 4:
    console.log('Thursday');
    break;
    case 5:

    console.log('Friday');
    break;

    case 6:
    console.log('Saturday');
    break;

    default:
    
    console.log('Sunday')
    break;
   }




   const number = [1,2,3,4,5]
  for(i=0; i<5;i++){
    console.log(number[i])
  }
   
   
  
  const x = [1,2,3,4,5,6,7,8,9,10]
  
   for(i = 0; i < x.length ; i++)
    {
    if(( x[i] %2 ===0))
        {
    console.log(x[i])
    }
   }


   


   let a = [1,2,3,4,5,6,7,8,9,10];
   let p = a.reduce(function(sum,elem) {
    return sum + elem;
   }, 0);
   console.log(p);

   const person = {
    Name: "Funtik",
    Age: 34
   }
 console.log(person)

  
const book ={
    title: "Finiki"
}
book.title = "Kurkema"
console.log(book)




const car1 = {
    Brand: "Audi",
    model: "A4",
    year: "1998"
}
console.log(`Brand - ${car.Brand}
model - ${car.model}
year -  ${car.year} `)




const fruit = {
Name: "Strawberry",
color: "Red",
taste: "sweety"
}
for (let str in fruit){ 
    console.log(`key is ${str}`);
    console.log(`prop: ${ fruit [str] }`)
    console.log(`----------------`)
}





const students = {
    name: 'Boris',
    age: 54,
    grades:{
     math: 4,
     biology: 3,
     histiry:5
    }
}
console.log(students)




const car = {
    engine:{
        horsePower: 230,
        fuelType: 'Diesel'
    }
}
car.engine.horsePower = 240
console.log(car)




const playlist = {
    songs:[song,{step: 152}]
        
}
for(let key in playlist.songs[song]){
console.log(`key is ${key}`)
console.log(`prop: ${playlist[key]}`)
console.log(`-----------`)
}




const book ={
    title: 'We are Gods',
    author: 'Bernar Werber',
    details:{
      pages: 347,
      publicationYear: 1986  
    }
}

console.log(book)