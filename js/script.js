document.addEventListener("click", function (e) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = e.clientX - 15 + "px";
    ripple.style.top = e.clientY - 15 + "px";
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", function () {
        this.remove();
    });
});
