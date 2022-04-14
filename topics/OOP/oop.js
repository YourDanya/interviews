class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name==='')
        console.log('user'+this.name);
    }
}

class Test
    extends User
{
    constructor(test) {
        super(test)
        this.test = test;
        // this.name =test +' 000'
    }
    doTest() {
        console.log('test'+this.test);
    }
}

console.log(Test.prototype)

Test.prototype.__proto__=User.prototype

const test = new Test('bleach')

Test.prototype.__proto__.bla='bla bla'

const user = new User('bleach')

console.log(user.bla)

// test.sayHi()