// Code your solution here

let findMatching = (driversArray, string) => {
   return driversArray.filter(driver => {
       return driver.toLowerCase() === string.toLowerCase()
    })
}

let fuzzyMatch = (driversArray, string) => {
    let num = string.length
    return driversArray.filter(driver => {
        return driver.slice(0, num) === string
    })
}

let matchName = (driversArray, string) => {
    return driversArray.filter(driver => {
        return driver.name === string
    })
}
