const { getContracts } = require("./contract");


function createLocations() {

    const locationsPrefix = ["the dark", "the village", "the scary"]
    const locationsSuffix = ["Mim", "ragnarok", "bogo"]
    const locations = new Map()
    const contracts = new Map()
    while (locations.size < 5) {
        const location = locationsPrefix[Math.floor(Math.random() * locationsPrefix.length)] + " "
            + locationsSuffix[Math.floor(Math.random() * locationsSuffix.length)]
        const monsterNum = Math.floor(Math.random() * (10 - 5 + 1)) + 5
        if (locations.get(location)) continue
        locations.set(location, monsterNum)
        contracts.set(location, getContracts(monsterNum))
    }

    return [locations, contracts]
}


// console.log(createLocations()[0]);
// console.log("------------------------------------------------------------------------");
// const result = createLocations()
// console.log(typeof result)
let [locations, contracts] = createLocations()
// let locations = result[0]
// let contracts = result[1]
console.log(locations);

db.create("contract", result[1])