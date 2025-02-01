var people = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 15 }
];

var age = people.map(person => {
    return{
        ...person,
        status: person.age > 18 ? "взрослый" : "ребенок"
    }
});

console.log(age);








var movies = [
{ title: "Inception", rating: 4.9 },
{ title: "The Dark Knight", rating: 5.0 },
{ title: "Interstellar", rating: 4.8 },
{ title: "The Matrix", rating: 4.5 }
];

movies.forEach(movie => {
    if(movie.rating > 4) {
        console.log(movie.title);
    }
})