const dailyButton = document.getElementById("daily-button");
const weeklyButton = document.getElementById("weekly-button");
const monthlyButton = document.getElementById("monthly-button");
const cardTimeBox = document.querySelectorAll(".card-time-box");

//Root Code
const weeklyTimeValues = ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"];
const weeklyPreviousTimeValues = ["Last Week - 36hrs", "Last Week - 8hrs", "Last Week - 7hrs", "Last Week - 5hrs", "Last Week - 10hrs", "Last Week - 2hrs"];
cardTimeBox.forEach((card, index) => {
    let weeklyTime = card.querySelector("#card-time");
    let weeklyPreviousTime = card.querySelector("#card-previous-time");
    
    weeklyTime.innerHTML = weeklyTimeValues[index];
    weeklyPreviousTime.innerHTML = weeklyPreviousTimeValues[index];
});
dailyButton.style.color = "hsl(236, 100%, 87%)";
weeklyButton.style.color = "rgb(255, 255, 255)";
monthlyButton.style.color = "hsl(236, 100%, 87%)";

//Daily Button
const dailyTimeValues = ["5hrs", "1hr", "0hrs", "1hr", "1hr", "0hrs"];
const dailyPreviousTimeValues = ["Yesterday - 7hrs", "Yesterday - 2hrs", "Yesterday - 1hr", "Yesterday - 1hr", "Yesterday - 3hrs", "Yesterday - 1hr"];
dailyButton.addEventListener("click", () => {
    cardTimeBox.forEach((card, index) => {
        let dailyTime = card.querySelector("#card-time");
        let dailyPreviousTime = card.querySelector("#card-previous-time");

        dailyTime.innerHTML = dailyTimeValues[index];
        dailyPreviousTime.innerHTML = dailyPreviousTimeValues[index];
    });
    dailyButton.style.color = "rgb(255, 255, 255)";
    weeklyButton.style.color = "hsl(236, 100%, 87%)";
    monthlyButton.style.color = "hsl(236, 100%, 87%)";
});

//Weekly Button
weeklyButton.addEventListener("click", () => {
    cardTimeBox.forEach((card, index) => {
    	let weeklyTime = card.querySelector("#card-time");
    	let weeklyPreviousTime = card.querySelector("#card-previous-time");
    
    	weeklyTime.innerHTML = weeklyTimeValues[index];
    	weeklyPreviousTime.innerHTML = weeklyPreviousTimeValues[index];
    });
    dailyButton.style.color = "hsl(236, 100%, 87%)";
    weeklyButton.style.color = "rgb(255, 255, 255)";
    monthlyButton.style.color = "hsl(236, 100%, 87%)";
});

//Monthly Button
const monthlyTimeValues = ["103hrs", "23hrs", "13hrs", "11hrs", "21hrs", "7hrs"];
const monthlyPreviousTimeValues = ["Last Month - 128hrs", "Last Month - 29hrs", "Last Month - 19hrs", "Last Month - 18hrs", "Last Month - 23hrs", "Last Month - 11hrs"];
monthlyButton.addEventListener("click", () => {
    cardTimeBox.forEach((card, index) => {
    	let monthlyTime = card.querySelector("#card-time");
    	let monthlyPreviousTime = card.querySelector("#card-previous-time");
    
    	monthlyTime.innerHTML = monthlyTimeValues[index];
    	monthlyPreviousTime.innerHTML = monthlyPreviousTimeValues[index];
    });
    dailyButton.style.color = "hsl(236, 100%, 87%)";
    weeklyButton.style.color = "hsl(236, 100%, 87%)";
    monthlyButton.style.color = "rgb(255, 255, 255)";
});