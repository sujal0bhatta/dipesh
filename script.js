const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", (event) => {
    // Swap the positions of Yes and No buttons
    const yesPosition = yesBtn.getBoundingClientRect();
    const noPosition = noBtn.getBoundingClientRect();
    
    yesBtn.style.position = "absolute";
    noBtn.style.position = "absolute";
    
    yesBtn.style.left = noPosition.left + "px";
    yesBtn.style.top = noPosition.top + "px";

    noBtn.style.left = yesPosition.left + "px";
    noBtn.style.top = yesPosition.top + "px";
    
    // Prevent the event from triggering the Yes button's event
    event.stopPropagation();
});

yesBtn.addEventListener("click", () => {
    alert("Yay! Thank you for saying Yes! I Love You So Muchhhhhhhhh");
});
