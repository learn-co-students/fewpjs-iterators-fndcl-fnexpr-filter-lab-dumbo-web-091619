function findMatching (arr, name) {
  const matching = arr.filter(function (findName) {
    return findName.toLowerCase() === name.toLowerCase()
  })
  return matching
}

function fuzzyMatch (arr, str) {
  return arr.filter(function (name) {
    return name.toLowerCase().indexOf(str.toLowerCase()) === 0
  })
}

function matchName (arr, str) {
  return arr.filter(function (name) {
    return name.name === str
  })
}
