
let price1 = 8599;
let priceElement = document.getElementById('price1');
let price2 = 1999;
let priceElement2 = document.getElementById('price2');
let circle2 = document.getElementById('aqi-circle');


var swiper = new Swiper('.product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        // initialSlide: 2,
        loop: false,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        // mousewheel: {
        //     // invert: false
        // },
        on: {
            init: function(){
                var index = this.activeIndex;

                var target = $('.product-slider__item').eq(index).data('target');

                console.log(target);

                $('.product-img__item').removeClass('active');
                $('.product-img__item#'+ target).addClass('active');
            }
        }

    });

    swiper.on('slideChange', function () {
        var index = this.activeIndex;

        var target = $('.product-slider__item').eq(index).data('target');

        console.log(target);

        $('.product-img__item').removeClass('active');
        $('.product-img__item#'+ target).addClass('active');

        if(swiper.isEnd) {
            $('.prev').removeClass('disabled');
            $('.next').addClass('disabled');
        } else {
            $('.next').removeClass('disabled');
        }

        if(swiper.isBeginning) {
            $('.prev').addClass('disabled');
        } else {
            $('.prev').removeClass('disabled');
        }
    });

    $(".js-fav").on("click", function() {
        $(this).find('.heart').toggleClass("is-active");
    });



    document.addEventListener("DOMContentLoaded", function() {
        // Initialize global variables
        priceElement.innerHTML = `$${price1}<sup>99</sup>`;
        
        // Function to update price and AQI rate
        function updatePriceAndAQI() {
          const radioButtons1 = document.querySelectorAll('input[name="type1"]');
          const radioButtons2 = document.querySelectorAll('input[name="type2"]');
          let selectedType1, selectedType2;
          
          // Get the selected type from radio buttons
          radioButtons1.forEach(button => {
            if (button.checked) {
              selectedType1 = button.value;
            }
          });
          
          radioButtons2.forEach(button => {
            if (button.checked) {
              selectedType2 = button.value;
            }
          });
          
          // Update price based on selection
          if (selectedType1 === 'None') {
            price1 = 7999;
          } 
          else if (selectedType1 === '6') {
            price1 = 7999 + 600;
          }
          else if (selectedType1 === '24') {
            price1 = 7999 + 2400;
          }
          
          if (selectedType2 === 'over10k') {
            price1 *= 2;
          }
          
          // Update the displayed price
          if (priceElement) {
            priceElement.innerHTML = `$${price1}<sup>99</sup>`;
          }
          
          // Update AQI rate
          const circle = document.getElementById('aqi-circle');
          if (circle) {
            if (selectedType1 === 'None') {
              circle.setAttribute('stroke-dasharray', '150, 300');
              document.getElementById('circle1').innerHTML = '50%';
            } 
            else if (selectedType1 === '24') {
                circle.setAttribute('stroke-dasharray', '300, 300');
                document.getElementById('circle1').innerHTML = '100%';
              }
            else {
              circle.setAttribute('stroke-dasharray', '240, 300');
              document.getElementById('circle1').innerHTML = '80%';
            }
          }
        }
        
        // Add event listeners to radio buttons
        document.querySelectorAll('input[name="type1"]').forEach(button => {
          button.addEventListener('change', updatePriceAndAQI);
        });
        
        document.querySelectorAll('input[name="type2"]').forEach(button => {
          button.addEventListener('change', updatePriceAndAQI);
        });
      });









  document.addEventListener('DOMContentLoaded', function() {
    // Function to update price and durability
    function updatePriceAndDurability() {
      const radioButtons3 = document.querySelectorAll('input[name="type3"]');
      let selectedType3;
      
      // Get the selected type from radio buttons
      radioButtons3.forEach(button => {
        if (button.checked) {
          selectedType3 = button.value;
        }
      });
      
      
      // Update price based on selection
      if (selectedType3 === 'CLASS1') {
        price2 = 499;
        circle2 = document.getElementById('circle2');
        if (circle2) {
          circle2.setAttribute('stroke-dasharray', '120, 300');
          document.getElementById('bbi2').innerHTML = '40%';
          document.getElementById('modelNum').innerHTML = '1';
        }
      } else if (selectedType3 === 'CLASS2') {
        price2 = 699;
        circle2 = document.getElementById('circle2');
        if (circle2) {
          circle2.setAttribute('stroke-dasharray', '200, 300');
          document.getElementById('bbi2').innerHTML = '60%';
          document.getElementById('modelNum').innerHTML = '2';
        }
      } else if (selectedType3 === 'CLASS3') {
        price2 = 1299;
        circle2 = document.getElementById('circle2');
        if (circle2) {
          circle2.setAttribute('stroke-dasharray', '260, 300');
          document.getElementById('bbi2').innerHTML = '80%';
          document.getElementById('modelNum').innerHTML = '3';
        }
      } else {
        price2 = 1999;
        circle2 = document.getElementById('circle2');
        if (circle2) {
          circle2.setAttribute('stroke-dasharray', '300, 300');
          document.getElementById('bbi2').innerHTML = '100%';
          document.getElementById('modelNum').innerHTML = '4';
        }
      }
      
      // Update the displayed price
      const priceElement = document.getElementById('price2');
      if (priceElement) {
        priceElement.innerHTML = `$${price2}<sup>99</sup>`;
      }
    }
    
    // Add event listeners to radio buttons
    document.querySelectorAll('input[name="type3"]').forEach(button => {
      button.addEventListener('change', updatePriceAndDurability);
    });
  });










  function updatePrice2() {
    const radioButtons4 = document.querySelectorAll('input[name="type4"]:checked');
    let selectedPrice;
    
    // Get the selected price from radio buttons
    radioButtons4.forEach(button => {
      selectedPrice = button.value;
    });
    
    // Update the displayed price
    const priceElement = document.getElementById('price3');
    if (priceElement) {
      priceElement.innerHTML = `$${selectedPrice}<sup>99</sup>`;
    }
  }
  
  // Add event listeners to radio buttons
  document.querySelectorAll('input[name="type4"]').forEach(button => {
    button.addEventListener('change', updatePrice2);
  });








  document.addEventListener('DOMContentLoaded', function() {
    // Function to update price based on quantity
    function updatePrice4() {
      const quantityInput = document.getElementById('filters');
      const priceElement3 = document.getElementById('price4');
      
      // Get the quantity entered by the user
      const quantity = parseInt(quantityInput.value);
      
      // Get the base price per item
      const basePrice = 85.99;
      
      // Calculate the total price
      const totalPrice = quantity * basePrice;
      
      // Update the displayed price
      if (!isNaN(totalPrice) && priceElement3) {
        priceElement3.innerHTML = `$${totalPrice.toFixed(2)}<sup>99</sup>`;
      }
    }
    
    // Add event listener to the quantity input
    const quantityInput = document.getElementById('filters');
    if (quantityInput) {
      quantityInput.addEventListener('input', updatePrice4);
    }
  });

  function composeEmail() {
    // Email address
    var email = "zachstangl@gmail.com";

    // Subject
    var subject = encodeURIComponent("#BreatheBetter Package Details");

    // Body
    var body = encodeURIComponent("Ensuring clean air is essential for our health and well-being, as it directly impacts our respiratory system and overall quality of life. With AirBox's advanced charcoal filtration system, we guarantee an unparalleled level of purity in the air you breathe. Charcoal filtration effectively traps harmful pollutants and toxins, including allergens, dust, and airborne particles, providing you with a sanctuary of fresh and clean air. By investing in AirBox, you not only safeguard your health but also create a conducive environment for productivity and relaxation. Experience the difference with AirBox and breathe better today.");

    // Construct the mailto link
    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

    // Open the default email client
    window.location.href = mailtoLink;
}


function liveChat() {
var fashionElement = document.getElementById('fashion');
if (fashionElement.style.display === 'none') {
  fashionElement.style.display = 'block';
} else {
  fashionElement.style.display = 'none';
}
}

function changeIframeSource(value) {
  document.getElementById('iframe').src = value;
}