// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
// console.log(square(3))

// const event = {
//     name: 'Birthday party',
//     printGuestList: function(){
//         console.log('Guest List for ' + this.name)
//     }
// }

const event = {
    name: 'Birthday party',
    guestList: ['Raghav', 'Sharan','Ratish'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()