let s = 'zxbcd'

s=s.replace(/[a-zA-Zа-яА-Я]/, (match) => match.toUpperCase())

console.log(s)