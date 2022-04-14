const updateString = (string) => {
    for (let i= string.length; i>=0; i--) {
        if(string[i] === ' ') {
            while(!string[i-1].match(/[а-я]/i)){
                i--
            }
            return `${string.slice(0, i)}...`
        }
    }
}

console.log(updateString('тыек ры к рпЦ>/, укфук'))