
// const name = 'Mahesh'
// const userAge = 23

// const user = {
//     name,
//     age : userAge,
//     location: 'Bangalore'
// }

// console.log(user)

//object destructing
const product = {
    label: 'Mukajjiya Kanasugalu',
    price: 3,
    stock: 200,
    salePrice: undefined,
    rating: 4.2
}

// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)