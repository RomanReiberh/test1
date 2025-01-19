class Men {
    constructor(name, age) {
        this.info1 = name;
        this.info2 = age;
    }

    displayInfo() {
        console.log(`Имя: ${this.info1}, Возраст: ${this.info2}`);
    }
}
const people = new Men("Ivan", 44);

console.log(people.displayInfo())







const books = [
    { title: "Мы Боги", author: "Бернар Вербер" },
    { title: "Мертвые души", author: "Николай Гоголь" },
    { title: "Преступление и наказание", author: "Михаил Булгаков" },
    { title: "Гарри Поттер", author: "Джоан Роулинг" }
];
books.forEach(book => {
    console.log(`Название: ${book.title}, Автор: ${book.author}`)
});







const rectangle = { a: 10, b: 35 };
rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);
console.log(rectangle);







const fruits = [
    { name: "Драконий Фрукт", color: "красный" },
    { name: "Банан", color: "желтый" },
    { name: "Черешня", color: "красный" },
    { name: "Яблоко", color: "зеленый" }
];
const red = fruits.filter(fruit => fruit.color === "красный")
red.forEach(fruit => console.log(`Название: ${fruit.name}, Цвет: ${fruit.color}`));









const playlist = {
    name: "Мой список",
    songs: [
        { title: "Mockingbird", artist: "Eminem", duration: "4:10" },
        { title: "Without me", artist: "Eminem", duration: "4:50" },
        { title: "Superman", artist: "Eminem", duration: "5:47" },
        { title: "Rap God", artist: "Eminem", duration: "6:03" }
    ]
};
playlist.songs.forEach((song, index) => {
    console.log(`Песня ${index + 1}:`);
    console.log(`Название: ${song.title}`);
    console.log(`Исполнитель: ${song.artist}`);
    console.log(`Длительность: ${song.duration}`);
    console.log('-----------------------');
});
