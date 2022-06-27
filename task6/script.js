window.addEventListener("resize", function() {
    let text = document.querySelector("#text");
    text.innerHTML = 'Width: ' + window.innerWidth + '; Height: ' + window.innerHeight;
});