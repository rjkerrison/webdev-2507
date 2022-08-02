const myButton = document.querySelector(`button`);
const a = document.querySelector(`strong`);
let count = 0;

myButton.addEventListener(`click`, function() {
  count++;
  console.log(count);
  a.textContent = count;
});