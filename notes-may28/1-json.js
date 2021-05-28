const fs = require('fs')
// const book = {
//     title:'Malegalalli Madumagalu',
//     author:'Kuvempu'
// }
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData)

// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// //   console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name ='Sharanu',
user.place ='Badami'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)
