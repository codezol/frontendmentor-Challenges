//change the color of the writing when the input is invalid

let invalid = document.querySelectorAll('.invalid');
let button = document.querySelector('.arrow');
button.addEventListener('click', ()=> {
    let daysInput = document.querySelector('.days-input').value;
    let monthsInput = document.querySelector('.months-input').value;
    let yearsInput = document.querySelector('.years-input').value;
    let daysSpan = document.querySelector(".days");
    let yearsSpan = document.querySelector(".years");
    let monthsSpan = document.querySelector(".months");
    let months = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31]
   
    

//claculate the total number of days the person lived
button.addEventListener('click', () => {
    //the current date
    var date = new Date
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    if( daysInput > currentDay){
        currentDay = currentDay+ months[currentMonth - 1];
        currentMonth -= 1;
    }
    if( monthsInput > currentMonth){
        currentMonth += 12;
        currentYear -= 1;
    }
    let day = currentDay - daysInput;
    let month = currentMonth - monthsInput;
    let year = currentYear - yearsInput;
    console.log(currentDay, daysInput)
    daysSpan.innerHTML = day;
    monthsSpan.innerHTML = month;
    yearsSpan.innerHTML = year;
})








})






