document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".menu__accordion-head");

    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            var arrow = this.querySelector(".accordion__head-arrow");

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                arrow.classList.add("accordion__head-arrow--active");
            } else {
                content.style.display = "none";
                arrow.classList.remove("accordion__head-arrow--active");
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const settingsMain = document.getElementById("settings-main");
    const settingsItems = document.querySelectorAll(".header__settings-item");
    const settingsArrow = document.getElementById("settings-arrow");
  
    settingsMain.addEventListener("click", function(event) {
        event.preventDefault();
        settingsItems.forEach(function(item) {
            if (item.style.display === "none" || item.style.display === "") {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
        settingsArrow.classList.toggle("settings-arrow-180");
    });
  });