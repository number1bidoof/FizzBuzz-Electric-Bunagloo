// Defines all varibles from HTMl
const MyNum = document.getElementById("numput")
const MyResult = document.getElementById("result")
const MyButton = document.getElementById("enter")
let i
MyButton.onclick = function(Event) {
    Event.preventDefault()
    i = MyNum.value;
        if (i % 3 === 0 && i % 5 === 0) {
            MyResult.textContent = "FizzBuzz"; // or "FizzBuzz"
        } else if (i % 3 === 0) {
            MyResult.textContent = "Fizz";
        } else if (i % 5 === 0) {
            MyResult.textContent = "Buzz";
        } else {
            MyResult.textContent = i
        }
}
