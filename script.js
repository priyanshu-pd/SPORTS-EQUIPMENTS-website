$(document).ready(function () {
  const carousel = (container, margin) => {
    $(container).owlCarousel({
      loop: true,
      margin: margin,
      dots: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  };

  carousel(".featured-products", 10);
  carousel(".new-arrival-products", 70);
  carousel(".product-categories", 20);
  carousel(".brands", 20);

  $(".hamburger").click(() => {
    $("nav").toggleClass("active");
  });
});

function revealFunction(){

  window.sr= ScrollReveal({duration:1200, distance:'200px',easing:'ease-out'});


  sr.reveal('.reveal-left',{origin:'left', reset:false});
  sr.reveal('.reveal-top',{origin:'top', reset:false});
  sr.reveal('.reveal-bottom',{origin:'bottom', reset:false});
  sr.reveal('.reveal-right',{origin:'right', reset:false});

  // sr.reveal('.reveal-reset-true',{origin:'bottom', reset:true});
  // sr.reveal('.reveal-rotate',{origin:'bottom', rotate{x:1000, z:1000},reset:true});

}

window.addEventListener('load',()=>{
  revealFunction();
})
