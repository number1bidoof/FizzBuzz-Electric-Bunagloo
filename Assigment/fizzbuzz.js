// Defines all varribles from HTMl
const MyNum = document.getElementById("numput")
const MyResult = document.getElementById("result")
const MyButton = document.getElementById("enter")
let i
let fizz = "Fizz"
let buzz = "Buzz"
MyButton.onclick = function(Event) {
    Event.preventDefault()
    i = MyNum.value;
        if (i % 3 === 0 && i % 5 === 0) {
            MyResult.innerHTML = fizz + buzz; // or "FizzBuzz"
        } else if (i % 3 === 0) {
            MyResult.innerHTML = fizz;
        } else if (i % 5 === 0) {
            MyResult.innerHTML = buzz;
        } else {
            MyResult.innerHTML = i
        }
}
