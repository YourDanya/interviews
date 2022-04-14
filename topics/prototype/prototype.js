function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats );