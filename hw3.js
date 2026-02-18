document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".clickbox");
    let info = document.getElementById("info");
    
    boxes.forEach(function(box) {
        box.addEventListener("click", function() {
            if (this.style.backgroundColor === "pink" || this.style.backgroundColor === "") {
                this.style.backgroundColor = "brown";
                info.textContent = "квадрат стал коричневым!";
            } else {
                this.style.backgroundColor = "pink";
                info.textContent = "квадрат стал розовым!";
            }
        });
    });
});







