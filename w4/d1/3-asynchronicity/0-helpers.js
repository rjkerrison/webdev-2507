function getRandomDelay() {
  // let's pretend we are relying on external services
  const randomDelay = 10000 * Math.random()
  return randomDelay
}

function appendDwarvesAndLog(fetchedInfo) {
  const newMessage = `${fetchedInfo} And The Seven Dwarves`
  console.log('CALLBACK DONE', newMessage)
}

module.exports = {
  getRandomDelay,
  appendDwarvesAndLog,
}
