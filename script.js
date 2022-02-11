
$(document).ready(function(){
    $('#owl-carousel-1').owlCarousel(
        {
            items: 1,
            autoWidth: 996,
            loop: true,
            dots: false,
            margin: 24,
            items : 4,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,2],
            itemsMobile : [479,1],
          }
    );
  });
  
let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("activeAcc");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}