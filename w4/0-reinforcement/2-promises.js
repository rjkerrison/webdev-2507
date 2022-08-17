// Here we're creating a promise that fulfills (returns) after 300 milliseconds. If the randomNum is less than 7 it resolves (success) otherwise it rejects (fail)
const myPromise = new Promise((resolve, reject) => {

  setTimeout(
    () => {
      const randomNum = Math.floor(Math.random() * 10);  // a random integer between 0 - 9

      if (randomNum < 7) {
        resolve('Resolved!');
      } else {
        reject(`Rejected!`);
      }
    },
    300)

});

// If we log myPromise right away
console.log(myPromise)  // Promise {<pending>}. Because myPromise returns after 300

// Because we know myPromise returns after 300 milliseconds, we can wait 301 milliseconds before logging myPromise
setTimeout(
  () => {
    console.log(myPromise)  // Promise {`Resolved!`} if it is successful. Otherwise it would error if it rejects
  },
  301)

// But what if we didn't know how long to wait
myPromise
  .then(
    (resolveMsg) => { console.log(resolveMsg) } // This logs our resolve message if our promise succeeds
  )
  .catch(
    (rejectMsg) => { console.log(`Oh Oh!: `, rejectMsg) } // This logs our reject message if our promise fails
  )

// We can also use await to wait for our promise to resolve
async function doMyPromise() {
  try { // We try to resolve myPromise
    const resolveMsg = await myPromise;
    console.log(resolveMsg);  // This logs our resolve message if our promise succeeds

  } catch (rejectMsg) { // If it rejects (fails), we catch the rejection error
    console.log(`Oh Oh!: `, rejectMsg); // This logs our reject message if our promise fails
  }
}

doMyPromise()