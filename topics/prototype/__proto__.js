// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
//
// rabbit.__proto__ = animal
//
// console.log(animal.jumps)

////////////////////////////////////////////////////////////

// let user = {
//     name: "John",
//     surname: "Smith",
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
//
// let admin = {
//     __proto__: user,
//     isAdmin: true
// };
//
// alert(admin.fullName); // John Smith (*)
//
// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// alert(admin.name); // Alice
// alert(admin.surname)

////////////////////////////////////////////////////////////

// let animal = {
//     eats: true
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
//
// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
//
//     if (isOwn) {
//         alert(`Our: ${prop}`); // Our: jumps
//     } else {
//         alert(`Inherited: ${prop}`); // Inherited: eats
//     }
// }

// let hamster = {
//     stomach: [],
//
//     eat(food) {
//         this.stomach.push(food);
//     }
// };
//
// let speedy = {
//     __proto__: hamster,
//     stomach: []
// };
//
// let lazy = {
//     __proto__: hamster
// };
//
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple
//
// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log( lazy.stomach );