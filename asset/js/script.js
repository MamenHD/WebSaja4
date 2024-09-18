new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView: 1
        },
        756:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
  });

const inputs = document.querySelectorAll(".input");

function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc(){
  let parent = this.parentNode;
  if(this.value == ""){
    parent.classList.remove("focus");
  }
  
}

inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


