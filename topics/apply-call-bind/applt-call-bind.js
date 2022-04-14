const person = {
    name: 'Marko Polo'
}

function greeting(greetingMessage, optional) {
    return `${greetingMessage} ${optional} ${this.name}`
}

console.log(greeting.call(person, 'Hello', 'Bitch'))
