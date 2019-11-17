function findMatching (arr, name) {
  const matching = arr.filter(function (findName) {
    return findName.toLowerCase() === name.toLowerCase()
  })
  return matching
}

function fuzzyMatch (arr, str) {
  return arr.filter(function (name) {
    return name.slice(0, 3).includes(str)
  })
}

function matchName (arr, str) {
  return arr.filter(function (name) {
    return name.name === str
  })
}
