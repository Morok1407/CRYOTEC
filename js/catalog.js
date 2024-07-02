function handleFocus(event) {
    event.target.classList.add("filter-link--active");
    const targetSelector = event.target.getAttribute("data-target");
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.classList.add("filter-arrow--active");
    }
  }
  
  function handleBlur(event) {
    event.target.classList.remove("filter-link--active");
    const targetSelector = event.target.getAttribute("data-target");
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.classList.remove("filter-arrow--active");
    }
  }
  
  const selects = document.querySelectorAll("select");
  
  selects.forEach((select) => {
    select.addEventListener("focus", handleFocus);
    select.addEventListener("blur", handleBlur);
  });
  
  document.addEventListener("click", function (event) {
    if (!event.target.matches("select")) {
      selects.forEach((select) => {
        select.classList.remove("filter-link--active");
        const targetSelector = select.getAttribute("data-target");
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          targetElement.classList.remove("filter-arrow--active");
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll("select");
    const items = document.querySelectorAll(".card-item");
  
    filters.forEach((filter) => {
      filter.addEventListener("change", () => {
        const filterValues = Array.from(filters)
          .map((filter) => filter.value)
          .filter((value) => value !== "");
  
        items.forEach((item) => {
          const itemCategories = item.dataset.categories.split(" ");
          const isVisible = filterValues.every((value) =>
            itemCategories.includes(value)
          );
          item.style.display = isVisible ? "block" : "none";
        });
      });
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const filterToggleButton = document.querySelector(".filter-toggle-button");
    const filterContainer = document.getElementById("filter-container");
    const filters = document.querySelectorAll(".filter-link");
    const items = document.querySelectorAll(".item");
  
    filterToggleButton.addEventListener("click", () => {
      if (
        filterContainer.style.display === "none" ||
        filterContainer.style.display === "flex"
      ) {
        filterContainer.style.display = "flex";
      } else {
        filterContainer.style.display = "flex";
      }
    });
  
    filters.forEach((filter) => {
      filter.addEventListener("change", () => {
        const filterValues = Array.from(filters)
          .map((filter) => filter.value)
          .filter((value) => value !== "");
  
        items.forEach((item) => {
          const itemCategories = item.dataset.categories.split(" ");
          const isVisible = filterValues.every((value) =>
            itemCategories.includes(value)
          );
          item.style.display = isVisible ? "block" : "none";
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const filterToggleButton = document.querySelector(".filter-toggle-button");
    const filterContainer = document.getElementById("filter-container");
    const filterList = document.getElementById("filter-list");
    const filterButtons = document.getElementById("filter-buttons");
    const filters = document.querySelectorAll(".filter-link");
    const items = document.querySelectorAll(".item");
  
    filterToggleButton.addEventListener("click", () => {
      if (
        filterList.style.display === "none" ||
        filterList.style.display === ""
      ) {
        filterList.style.display = "flex";
        filterList.style.justifyContent = "center";
        filterList.style.width = "100%";
      } else {
        filterList.style.display = "none";
      }
    });
  
    filters.forEach((filter) => {
      filter.addEventListener("change", () => {
        const filterValues = Array.from(filters)
          .map((filter) => filter.value)
          .filter((value) => value !== "");
  
        items.forEach((item) => {
          const itemCategories = item.dataset.categories.split(" ");
          const isVisible = filterValues.every((value) =>
            itemCategories.includes(value)
          );
          item.style.display = isVisible ? "block" : "none";
        });
      });
    });
  
    const rearrangeElements = () => {
      if (window.innerWidth <= 900) {
        filterContainer.insertBefore(filterButtons, filterList);
      } else {
        filterContainer.appendChild(filterList);
        filterContainer.appendChild(filterButtons);
      }
    };
  
    rearrangeElements();
  
    window.addEventListener("resize", rearrangeElements);
  });

  const imageButton = document.getElementById("filter-toggle-button");
const changingImage = document.getElementById("changingImage");

imageButton.addEventListener("click", function () {
  if (changingImage.alt === "close icon") {
    changingImage.src = "img/icon/filtr icon.svg";
    changingImage.alt = "filtr icon";
  } else {
    changingImage.src = "img/icon/close icon.svg";
    changingImage.alt = "close icon";
  }
});

// =================================================================================


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