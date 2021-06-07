// setTimeout(() => {
//     console.log('Two sec are up')
// }, 2000)

// const names = ['Sharanu', 'Ram', 'suhel']
// const shortNames = names.filter((name) => {
//     return name.length <= 6
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Badami', (data) => {
//     console.log(data)
// })


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    },2000)
}

add(1,4 ,(sum) => {
    console.log(sum)
})