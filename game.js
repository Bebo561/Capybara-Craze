let gameboard = document.querySelector("#gameboard");
let capy = document.querySelector("#capy");
let pelican = document.querySelector("#pelican");
let cloud = document.querySelector("#cloud");
//score
let oranges = document.querySelector("#oranges");
//fruit to collect to gain score
let fruit = document.querySelector("#orange");

var interval = null;
let score = 0;

//score function
var scorectr = ()=>{
    //If a fruit is collected, increment the score by one.
    score += 1; 
    //Displays the score in the HTML.
    oranges.innerHTML = `Oranges <b>${score}</b>`;
}

//Function that begins the game
window.addEventListener("keydown" , (start)=>{
    //If the player presses space, the game starts.
    if(start.code == "Space"){
        //Activates the pelican animations
        pelican.classList.add("pelicanActive");
        //Activates the cloud animations
        cloud.classList.add("cloudActive");
        //Activates the fruit animations
        fruit.classList.add("orangeActive");
        //Resets score at the beginning of each play through
        score = 0;
        interval = setInterval(scorectr, 2000);
    }
});

//Jumping function
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
    //Checks if the player is not already in jumping animation
        if (capy.classList != "capyActive") {
            //Adds the jumping animation
            capy.classList.add("capyActive");

            //Sets a timer for how long the player has to wait before they get the ability to jump once again.
            setTimeout(() => {
                capy.classList.remove("capyActive");
            }, 500);
        }
});

//Ends the game if a collision between the player and an obstacle occurs, checks every .01 seconds
let end = setInterval(() => {
    let capyBottom = parseInt(getComputedStyle(capy).getPropertyValue("bottom"));

    let pelicanLeft = parseInt(getComputedStyle(pelican).getPropertyValue("left"));

    let fruitleft = parseInt(getComputedStyle(fruit).getPropertyValue("left"));

    //If the value of the players area on the screen is close enough to the value of a collision object, we reset the game.
    if(capyBottom <= 90 && pelicanLeft >= 20 && pelicanLeft <= 40){
        alert("Game Over!");
        //Resets pelican animation
        pelican.classList.remove("pelicanActive");
        //Resets cloud animation
        cloud.classList.remove("cloudActive");
        //Resets fruit animation
        fruit.classList.remove("orangeActive");
        //Resets score counter, has to be done or else the score counter will continue to display old score until player collects new fruits
        oranges.innerHTML = `Oranges <b>00</b>`;
        clearInterval(interval);
        score = 0;
        interval = null;
    }
    //If a collision with a fruit occurs, and a collision has not already occured previously causing the fruit to disappear, then 
    // we add the orangeCollected class to the orange CSS to signify to the player they have collected an orange by making it disappear.
    if(capyBottom <= 90 && fruitleft >= 40 && fruitleft <= 100 && fruit.classList != ("orangeCollected")){
        fruit.classList.add("orangeCollected");
        //After 1 seconds, the function automatically removes the orangeCollected class to make the orange reappear.
        setTimeout(() => {
            fruit.classList.remove("orangeCollected");
        }, 1000);
    }
}, 10);