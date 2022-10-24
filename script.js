let count_of_clicks = 0;
let count_of_goals = 0;

let clicks = document.querySelector('.clicks');
let hits = document.querySelector('.hits');
let stats = document.querySelector('.stats');
let my_digit = document.querySelector('.my_digit');
let computer_digit = document.querySelector('.computer_digit');

let error_message = document.querySelector('.error_message');
let max = 9;

document.addEventListener("keydown", function (event) {

    hits.textContent = count_of_goals;
    if (event.code.match(/Digit[0-9A-F]/)) {
        let goal = Math.floor(Math.random() * (max + 1));
        my_digit.textContent = event.code[5];
        computer_digit.textContent = goal;
        my_digit.style.cssText = `color: red`;
        error_message.textContent = "";
        count_of_clicks++;
        clicks.textContent = count_of_clicks;
        if (event.code[5] == goal) {
            count_of_goals++;
            hits.textContent = count_of_goals;
            my_digit.style.cssText = `color: green`;
        }
    } else
        error_message.textContent = "Надо нажать на цифру, а не букву";

    if (count_of_goals !== 0) {
        stats.textContent = `${Math.round((count_of_goals / count_of_clicks) * 100)} %`;
    } else stats.textContent = "0%";
});