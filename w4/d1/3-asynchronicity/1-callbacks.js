const { getRandomDelay, appendDwarvesAndLog } = require('./0-helpers')

// COMPLETELY STATIC - CAN ONLY LOG THE INFO
function findFavouritePrincess() {
  setTimeout(() => {
    console.log('Snow White')
  }, getRandomDelay())
}

// CUSTOMISABLE - CAN DO ANYTHING WITH THE INFO
function findFavouritePrincessWithCallback(callback) {
  setTimeout(() => {
    callback('Snow White')
  }, getRandomDelay())
}

findFavouritePrincessWithCallback(appendDwarvesAndLog)
