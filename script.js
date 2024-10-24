const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
    // Swap the positions of Yes and No buttons
    const yesPosition = yesBtn.getBoundingClientRect();
    const noPosition = noBtn.getBoundingClientRect();
    
    yesBtn.style.position = "absolute";
    noBtn.style.position = "absolute";
    
    yesBtn.style.left = noPosition.left + "px";
    yesBtn.style.top = noPosition.top + "px";

    noBtn.style.left = yesPosition.left + "px";
    noBtn.style.top = yesPosition.top + "px";
});

yesBtn.addEventListener("click", () => {
    alert("Yay! Thank you for saying Yes! I Love You So Muchhhhhhhhh");
});
