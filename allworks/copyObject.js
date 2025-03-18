class CopyEntity {
    static copyObject(obj) {
        if (obj === null || typeof obj !== 'object') {
            throw new Error('Переданный параметр не является объектом');
        }

        return JSON.parse(JSON.stringify(obj));
    }
}

const originalObject = {
    name: "Roman",
    age: 28,
    address: {
        city: "Altenstadt",
        zip: "22101996"
    }
};

const copiedObject = CopyEntity.copyObject(originalObject);

copiedObject.name = "Kate";
copiedObject.age = 27
copiedObject.address.city = "Friedberg";
copiedObject.address.zip = "10051997"

console.log(originalObject);
console.log(copiedObject);