function createrain(){
    const canvas = document.createElement("div");
    canvas.classList.add("canvas");

    canvas.style.left = Math.random() * 100 + "vw";
    //vw allows the spread of the image rain to be across the screen.
    canvas.style.animationDuration = Math.random()*5 + 3 + "s";

    canvas.innerHTML = "<img src='Images/rainycapy.png' alt='capyrain' height = '50px' width = '50px'/>";
    document.body.appendChild(canvas);

    setTimeout(() => {
        canvas.remove(); 
    },  5000);
}
setInterval(createrain, 250);