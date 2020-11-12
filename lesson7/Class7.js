/*
let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
    ];

/!* Task 39
let filter = cars.filter((value) => {
    if (value.volume > 3) {
        return value
    }
})
console.log(filter);*!/

/!* Task 40
let filter = cars.filter((value) => {
    if (value.volume === 2) {
        return value
    }
})
console.log(filter);*!/

/!* Task 41-42
let filter = cars.filter((value) => {
    if (value.producer === 'mercedes' && value.volume >= 3) {
        return value
    }
})
console.log(filter);*!/

/!* Task 43
let filter = cars.filter((value) => {
    if (value.producer === 'subaru' && value.volume >= 3) {
        return value
    }
})
console.log(filter);*!/

/!* Task 44
let filter = cars.filter((value) => {
    if (value.power > 300) {
        return value
    }
})
console.log(filter);*!/

/!* Task 45
let filter = cars.filter((value) => {
    if (value.producer === 'subaru' && value.power > 300) {
        return value
    }
})
console.log(filter);*!/

/!* Task 46
let filter = cars.filter((value) => {
    if (value.engine.includes('ej')) {
        return value
    }
})
console.log(filter);*!/

/!* Task 47
let filter = cars.filter((value) => {
    if (value.engine.includes('ej') && value.producer === "subaru" && value.power >300) {
        return value
    }
})
console.log(filter);*!/

/!* Task 48
let filter = cars.filter((value) => {
    if (value.volume < 3 && value.producer === "mercedes") {
        return value
    }
})
console.log(filter);*!/

/!* Task 49
let filter = cars.filter((value) => {
    if (value.volume > 2 && value.power > 250) {
        return value
    }
})
console.log(filter);
*!/

/!* Task 50
let filter = cars.filter((value) => {
    if (value.power > 250 && value.producer === "bmw") {
        return value
    }
})
console.log(filter);*!/
*/



let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Ochackivska', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Zelena', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Klarka', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Romana', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Ihora', number: 121}}
];

/* Task 56
let sort = usersWithAddress.sort((a, b) => {
    if(a.id > b.id){
        return 1
    } else {
        return -1
    }
})
console.log(sort);*/

/* Task 57
let sort = usersWithAddress.sort((a, b) => {
    if(a.id < b.id){
        return 1
    } else {
        return -1
    }
})
console.log(sort);*/

/* Task 58
let sort = usersWithAddress.sort((a, b) => {
    if(a.age > b.age){
        return 1
    } else {
        return -1
    }
})
console.log(sort);*/

/* Task 59
let sort = usersWithAddress.sort((a, b) => {
    if(a.age < b.age){
        return 1
    } else {
        return -1
    }
})
console.log(sort);*/

/* Task 60
let sort = usersWithAddress.sort((a, b) => {
    if(a.name > b.name){
        return 1
    } else {
        return -1
    }
})
console.log(sort);*/


/* Task 61
let sort = usersWithAddress.sort((a, b) => {
    if(a.name < b.name){
        return 1
    } else {
        return -1
    }
})
console.log(sort);*/

/* Task 62
let sort = usersWithAddress.sort((a, b) => {
    if(a.address.street > b.address.street){
        return 1
    } else {
        return -1
    }
})
console.log(sort);*/

/* Task 63
let sort = usersWithAddress.sort((a, b) => {
    if(a.address.number > b.address.number){
        return 1
    } else {
        return -1
    }
})
console.log(sort);*/

/* Task 64
let filter = usersWithAddress.filter((value) => {
    if (value.age < 30) {
        return value
    }
})
console.log(filter);*/

/* Task 65
let filter = usersWithAddress.filter((value) => {
    if (value.status === false) {
        return value
    }
}
console.log(filter);*/

/* Task 66
let filter = usersWithAddress.filter((value) => {
    if (value.status === false && value.age < 30) {
        return value
    }
})
console.log(filter);
*/

let filter = usersWithAddress.filter((value) => {
    if (value.address.number % 2 === 0 && 2) {
        return value
    }
})
console.log(filter);