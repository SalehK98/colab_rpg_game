// import { getContracts } from "./contract.js";
import db from "./database.js";


function createLocations() {

    const locationsPrefix = ["the dark", "the village", "the scary"]
    const locationsSuffix = ["Mim", "ragnarok", "bogo"]
    const locations = {}
    // const contracts = {}
    while (Object.keys(locations).length < 5) {
        const location = locationsPrefix[Math.floor(Math.random() * locationsPrefix.length)] + " "
            + locationsSuffix[Math.floor(Math.random() * locationsSuffix.length)]
        const monsterNum = Math.floor(Math.random() * (10 - 5 + 1)) + 5
        if (Object.keys(locations).includes(location)) continue
        locations[location] = monsterNum
        // contracts[location] = getContracts(monsterNum)
    }

    return locations
}



let locations = createLocations()


// db.create("contracts", contracts)
db.create("locations", locations)

const myLocations = Object.keys(db.read.locations)

const numbers = Object.values(db.read.locations);
console.log(numbers);




document.getElementById("location_1").innerText = myLocations[0]
document.getElementById("location_2").innerText = myLocations[1]
document.getElementById("location_3").innerText = myLocations[2]
document.getElementById("location_4").innerText = myLocations[3]
document.getElementById("location_5").innerText = myLocations[4]

document.getElementById("location_1").addEventListener("click", () => {
    db.create("current", numbers[0])
    document.location.href = './contracts.html'
})
document.getElementById("location_2").addEventListener("click", () => {
    db.create("current", numbers[1])
    document.location.href = './contracts.html'

})
document.getElementById("location_3").addEventListener("click", () => {
    db.create("current", numbers[2])
    document.location.href = './contracts.html'

})
document.getElementById("location_4").addEventListener("click", () => {
    db.create("current", numbers[3])
    document.location.href = './contracts.html'

})
document.getElementById("location_5").addEventListener("click", () => {
    db.create("current", numbers[4])
    document.location.href = './contracts.html'

})





