var sales = [
{name: 'apple', price: 30},
{name: 'banana', price: 45},
{name: 'orange', price: 52},
{name: 'kiwi', price: 67}
];

function hasExpensiveItem(arr) {
    return arr.some(sale => sale.price > 50)
};
console.log(hasExpensiveItem(sales));