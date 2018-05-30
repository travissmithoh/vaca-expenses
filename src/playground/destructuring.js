//
// ARRAY
//

// // Example 1
// const address = ['13 Oneway Street', 'Cleveland', 'Ohio', '44114'];
// const [street, town, state, zip] = address;
// console.log(`You are in ${town}, ${state}. `)

// // Example 2 - only labeling what you need
// const address = ['13 Oneway Street', 'Cleveland', 'Ohio', '44114'];
// const [, town, state] = address;
// console.log(`You are in ${town}, ${state}. `)

// Example 3 - only labeling what you need
const address = ['13 Oneway Street', 'Cleveland'];
const [, town, state = 'Ohio'] = address;
console.log(`You are in ${town}, ${state}. `)

// Challange
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, small, medium, large] = item;
console.log(`A medium ${product} costs ${medium} `)
console.log(`A large ${product} costs ${large} `)

//
// OBJECT 
//


const person = {
    name: 'Travis',
    age: 47,
    location: {
        city: 'Cleveland',
        temp: 45
    }
};

// ES6 way
const {name:nameFirst = 'Anonymous', age} = person;
const {temp: temperature, city} = person.location;

console.log(`${nameFirst} is ${age}. `)
if (temperature && city) {
    console.log(`It's ${temperature} in ${city}. `)
};

// Old way
console.log(`${person.name} is ${person.age}. `)
if (person.location.temp && person.location.city) {
    console.log(`It's ${person.location.temp} in ${person.location.city}. `)
};


// // My attemp - correct
// const book = {
//     title: 'An unexpected journey',
//     author: 'Joe Smoe',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);