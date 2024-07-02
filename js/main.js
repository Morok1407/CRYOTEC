const BurgerMenu = document.getElementById("burger-menu");
const IconMenu = document.getElementById("icon-menu");

IconMenu.addEventListener("click", function () {
  const nav = document.querySelector(".header__nav");
  if (IconMenu.alt === "close icon") {
    IconMenu.src = "img/icon/menu icon.svg";
    IconMenu.alt = "menu icon";
    nav.classList.remove("header__nav--active"); 
  } else {
    IconMenu.src = "img/icon/close icon.svg";
    IconMenu.alt = "close icon";
    nav.classList.add("header__nav--active"); 
  }
});

document.addEventListener("click", function(event) {
  const nav = document.querySelector(".header__nav");
  if (!event.target.closest(".header__nav") && !event.target.closest("#icon-menu")) {
    IconMenu.src = "img/icon/menu icon.svg";
    IconMenu.alt = "menu icon";
    nav.classList.remove("header__nav--active");
  }
});

// =======================================================================
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("search-input").value;
    if (query) {
      window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchContainer = document.querySelector(".search-container");
  const headerSearch = document.querySelector(".header__search");

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault();
    searchContainer.classList.toggle("search-container--active");
  });

  document.addEventListener("click", function (event) {
    if (!headerSearch.contains(event.target)) {
      searchContainer.classList.remove("search-container--active");
    }
  });
});


// ==========================================================================

function resetFields(itemNumber) {
  document.getElementById('item-' + itemNumber + '-volume').value = '';
  document.getElementById('item-' + itemNumber + '-quantity').value = '';
}

// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const orderElement = document.getElementById('order');
  const successMessage = document.getElementById('success');
  const formSubmit = document.getElementById('form-submit');
  const overlay = document.getElementById('overlay');

  const toggleButton = document.getElementById('order-nitrogen');
  const design = document.getElementById('design');
  const footertoggleButton = document.getElementById('footer-order-nitrogen');
  const footertoggleButton2 = document.getElementById('footer-order-nitrogen-2');
  const closeButton = document.getElementById('close-order-nitrogen');
  const closeButton2 = document.getElementById('close-order-nitrogen-2');
  const returnButton = document.getElementById('return');

  function showSuccessMessage() {
    successMessage.style.display = 'block';
    formSubmit.style.display = 'none';
    
    setTimeout(() => {
      successMessage.style.display = 'none';
      formSubmit.style.display = 'block';
      orderElement.classList.remove('header__shipping--active'); 
      toggleOverlay(false);
    }, 5000);
  }

  const formDelivery = document.getElementById('form-delivery');
  const formPickup = document.getElementById('form-pickup');

  function handleFormSubmit(event) {
    event.preventDefault();
    showSuccessMessage();
  }

  if (formDelivery) {
    formDelivery.addEventListener('submit', handleFormSubmit);
  }
  if (formPickup) {
    formPickup.addEventListener('submit', handleFormSubmit);
  }



  function toggleOverlay(isActive) {
    if (isActive) {
      overlay.classList.add('overlay--show');
    } else {
      overlay.classList.remove('overlay--show');
    }
  }

  function addEventListenerIfElementExists(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
    }
  }

  addEventListenerIfElementExists(toggleButton, 'click', (event) => {
    event.stopPropagation();
    const isActive = orderElement.classList.toggle('header__shipping--active');
    toggleOverlay(isActive);
  });

  addEventListenerIfElementExists(design, 'click', (event) => {
    event.stopPropagation();
    const isActive = orderElement.classList.toggle('header__shipping--active');
    toggleOverlay(isActive);
  });

  addEventListenerIfElementExists(footertoggleButton, 'click', (event) => {
    event.stopPropagation();
    const isActive = orderElement.classList.toggle('header__shipping--active');
    toggleOverlay(isActive);
  });

  addEventListenerIfElementExists(footertoggleButton2, 'click', (event) => {
    event.stopPropagation();
    const isActive = orderElement.classList.toggle('header__shipping--active');
    toggleOverlay(isActive);
  });

  addEventListenerIfElementExists(closeButton, 'click', (event) => {
    event.stopPropagation();
    orderElement.classList.remove('header__shipping--active');
    toggleOverlay(false);
  });

  addEventListenerIfElementExists(closeButton2, 'click', (event) => {
    event.stopPropagation();
    orderElement.classList.remove('header__shipping--active');
    toggleOverlay(false);
  });

  document.addEventListener('click', (event) => {
    if (!orderElement.contains(event.target) && event.target !== toggleButton && event.target !== closeButton && event.target !== closeButton2) {
      orderElement.classList.remove('header__shipping--active');
      toggleOverlay(false);
    }
  });

  addEventListenerIfElementExists(overlay, 'click', (event) => {
    orderElement.classList.remove('header__shipping--active');
    toggleOverlay(false);
  });

  addEventListenerIfElementExists(returnButton, 'click', (event) => {
    event.stopPropagation();
    orderElement.classList.remove('header__shipping--active');
    toggleOverlay(false);
  });
});


function resetFields(index) {
  const itemToRemove = document.getElementById(`item${index}volume`).parentNode;
  dopPoly.removeChild(itemToRemove);
}


// document.addEventListener('DOMContentLoaded', () => {
//   const target = document.getElementById('order');
//   const toggleButton = document.getElementById('order-nitrogen');
//   const design = document.getElementById('design');
//   const footertoggleButton = document.getElementById('footer-order-nitrogen');
//   const footertoggleButton2 = document.getElementById('footer-order-nitrogen-2');
//   const closeButton = document.getElementById('close-order-nitrogen');
//   const closeButton2 = document.getElementById('close-order-nitrogen-2');
//   const overlay = document.getElementById('overlay');
//   const returnButton = document.getElementById('return');

//   function toggleOverlay(isActive) {
//     if (isActive) {
//       overlay.classList.add('overlay--show');
//     } else {
//       overlay.classList.remove('overlay--show');
//     }
//   }

//   function addEventListenerIfElementExists(element, event, handler) {
//     if (element) {
//       element.addEventListener(event, handler);
//     }
//   }

//   addEventListenerIfElementExists(toggleButton, 'click', (event) => {
//     event.stopPropagation();
//     const isActive = target.classList.toggle('header__shipping--active');
//     toggleOverlay(isActive);
//   });

//   addEventListenerIfElementExists(design, 'click', (event) => {
//     event.stopPropagation();
//     const isActive = target.classList.toggle('header__shipping--active');
//     toggleOverlay(isActive);
//   });

//   addEventListenerIfElementExists(footertoggleButton, 'click', (event) => {
//     event.stopPropagation();
//     const isActive = target.classList.toggle('header__shipping--active');
//     toggleOverlay(isActive);
//   });

//   addEventListenerIfElementExists(footertoggleButton2, 'click', (event) => {
//     event.stopPropagation();
//     const isActive = target.classList.toggle('header__shipping--active');
//     toggleOverlay(isActive);
//   });

//   addEventListenerIfElementExists(closeButton, 'click', (event) => {
//     event.stopPropagation();
//     target.classList.remove('header__shipping--active');
//     toggleOverlay(false);
//   });

//   addEventListenerIfElementExists(closeButton2, 'click', (event) => {
//     event.stopPropagation();
//     target.classList.remove('header__shipping--active');
//     toggleOverlay(false);
//   });

//   document.addEventListener('click', (event) => {
//     if (!target.contains(event.target) && event.target !== toggleButton && event.target !== closeButton && event.target !== closeButton2) {
//       target.classList.remove('header__shipping--active');
//       toggleOverlay(false);
//     }
//   });

//   addEventListenerIfElementExists(overlay, 'click', (event) => {
//     target.classList.remove('header__shipping--active');
//     toggleOverlay(false);
//   });

//   addEventListenerIfElementExists(returnButton, 'click', (event) => {
//     event.stopPropagation();
//     target.classList.remove('header__shipping--active');
//     toggleOverlay(false);
//   });
// });



// ========================================================================

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('delivery').classList.add('form__button--active');
  document.getElementById('form-delivery').classList.add('shipping__form-delivery--show');
});

document.getElementById('delivery').addEventListener('click', function() {
  this.classList.add('form__button--active');
  document.getElementById('form-delivery').classList.add('shipping__form-delivery--show');

  document.getElementById('pickup').classList.remove('form__button--active');
  document.getElementById('form-pickup').classList.remove('shipping__form-pickup--show');
});

document.getElementById('pickup').addEventListener('click', function() {
  this.classList.add('form__button--active');
  document.getElementById('form-pickup').classList.add('shipping__form-pickup--show');

  document.getElementById('delivery').classList.remove('form__button--active');
  document.getElementById('form-delivery').classList.remove('shipping__form-delivery--show');
});


// ========================================================================

document.getElementById('form-delivery').addEventListener('submit', function(event) {
  event.preventDefault(); 

  document.getElementById('success').style.display = 'flex';

  document.getElementById('form-submit').style.display = 'none';
});

document.getElementById('form-pickup').addEventListener('submit', function(event) {
  event.preventDefault(); 

  document.getElementById('success').style.display = 'flex';

  document.getElementById('form-submit').style.display = 'none';
});

