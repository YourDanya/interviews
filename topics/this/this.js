// const carDetails = {
//     name: 'Ford Mustang',
//     yearBought: 2005,
//     getName() {
//         return this.name
//     },
//     isRegistered: true
// }
// console.log(carDetails.getName())
//
// var name = 'Ford Ranger'
// var getCarName = carDetails.getName
//
// console.log(getCarName.apply(carDetails))

(function() {
    console.log(this)
})() // window

function iHateThis() {
    console.log(this)
}
iHateThis() // window

const myFavouriteObj = {
    guessThis() {
        const getName = () => {
            // копируем значение this из внешнего окружения
            console.log(this.name)
        }
        getName()
    },
    name: 'Marko Polo',
    thisIsAnnoying(callback) {
        callback()
    }
}

myFavouriteObj.guessThis() // window
myFavouriteObj.thisIsAnnoying(function() {
    console.log(this) // window
})