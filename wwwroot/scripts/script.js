document.addEventListener("DOMContentLoaded", function () {
    var buttonWrapper = document.querySelector(".map");
    var slides = document.querySelector(".inner");

    if (buttonWrapper && slides) {
        buttonWrapper.addEventListener("click", function (e) {
            if (e.target.nodeName === "BUTTON") {
                // Remove "active" class from all buttons
                Array.from(buttonWrapper.children).forEach(function (item) {
                    item.classList.remove("active");
                });

                // Handle slide transitions based on button clicked
                if (e.target.classList.contains("first")) {
                    slides.style.transform = "translateX(-0%)";
                    e.target.classList.add("active");
                } else if (e.target.classList.contains("second")) {
                    slides.style.transform = "translateX(-33.34%)";
                    e.target.classList.add("active");
                } else if (e.target.classList.contains("third")) {
                    slides.style.transform = "translateX(-66.67%)";
                    e.target.classList.add("active");
                }
            }
        });
    }
});
