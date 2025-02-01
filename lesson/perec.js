const movies = [
{ title: "Inception", year: 2010 },
{ title: "The Dark Knight", year: 2008 },
{ title: "Interstellar", year: 2014 },
{ title: "The Matrix", year: 1999 }
];

movies.sort((a, b) => a.year - b.year);
console.log(movies);





var people = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 22 }
];
var names = people.reduce((accumulator, person, index) => {
    if(index === 0) {
        return(person.name)
    }
    return accumulator + ', ' + person.name
}, "");
console.log(names);