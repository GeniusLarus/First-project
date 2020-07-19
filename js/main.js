// window.addEventListener('scroll', function () {
//
// })



$(document).ready(function(){
    $("#teamCarousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
              items: 2
            },
            780: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $("#clientsContainer").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            750: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    $("#testimonialsCarousel").owlCarousel({
        items: 1
    });
});
console.log(false || '' || undefined || 4 || true || 0)