//=============================================================================================//
//=======================/// reorganzing for the sake of demonstration ///====================//
//===========================================================================================//

//===========================================================================================//

var $cartMain = document.getElementById("cart");
var $cartSlider = document.getElementById("cart-slider");
(function () {
// first page ===============================================================================
    var $cart = document.getElementById("cart-options");
    $cartButtonA = document.createElement("BUTTON");
    $cartButtonA.setAttribute("type", "button");
    $cartButtonA.setAttribute("class", "cart-next");
    $cartButtonA.innerHTML = "next";

    $cart.appendChild($cartButtonA);

    //===================================================================================
    // formatting cart groups ===========================================================
    //===================================================================================

    var formGroup = document.getElementsByClassName("form-group");

    for (var i = 0; i < formGroup.length; i++) {
        var formGroupId = formGroup[i].setAttribute("id", "form-group-" + i + "");
    }
    // second page (date) ===============================================================================

    var groupDate = document.getElementById("form-group-0");

    var cartSlide0;
    cartSlide0 = document.createElement("div");
    cartSlide0.setAttribute("class", "cart-slide");
    cartSlide0.appendChild(groupDate);
    $cartSlider.appendChild(cartSlide0);


    $cartButtonB = document.createElement("BUTTON");
    $cartButtonB.setAttribute("type", "button");
    $cartButtonB.setAttribute("class", "cart-next");
    $cartButtonB.innerHTML = "next";
    cartSlide0.appendChild($cartButtonB);
    // fourth page (participants) ===============================================================================

    var groupPar = document.getElementById("form-group-1");
    // console.log(groupPar)
    var cartSlide1;
    cartSlide1 = document.createElement("div");
    cartSlide1.setAttribute("class", "cart-slide");
    cartSlide1.appendChild(groupPar);
    $cartSlider.appendChild(cartSlide1);


    $cartButtonC = document.createElement("BUTTON");
    $cartButtonC.setAttribute("type", "button");
    $cartButtonC.setAttribute("class", "cart-next");
    $cartButtonC.innerHTML = "next";
    cartSlide1.appendChild($cartButtonC);

    // fourth page (participants) ===============================================================================

    var groupHotel = document.getElementById("form-group-2");
    var cartSlide1b;
    cartSlide1b = document.createElement("div");
    cartSlide1b.setAttribute("class", "cart-slide");
    cartSlide1b.appendChild(groupHotel);
    $cartSlider.appendChild(cartSlide1b);


    $cartButtonCb = document.createElement("BUTTON");
    $cartButtonCb.setAttribute("type", "button");
    $cartButtonCb.setAttribute("class", "cart-next");
    $cartButtonCb.innerHTML = "next";
    cartSlide1b.appendChild($cartButtonCb);


    // sixth page (final price plus hotel,  email and review info)===============================================================================
    var cartOption1 = document.getElementById("form-group-3");
    var cartOption2 = document.getElementById("form-group-4");
    var cartReview = document.getElementById("review");
    // console.log(cartReview);
    var cartSlide3;
    cartSlide3 = document.createElement("div");
    cartSlide3.setAttribute("class", "cart-slide");
    cartSlide3.appendChild(cartOption1);
    cartSlide3.appendChild(cartOption2);
    cartSlide3.appendChild(cartReview);

    $cartSlider.appendChild(cartSlide3);


})();
// add events to customer options//
/*================ toggle options ====================*/
// function toggleA() {
//     pageToggle('1', 'groupOption');
// };
// function toggleB() {
//     pageToggle('2', 'groupOption');
// };
// function toggleC() {
//     console.log("clicked");
//     pageToggle('3', 'groupOption');
// };

//===================================================================================
// cart rotor script ===========================================================
//===================================================================================

//var $cartMain = document.getElementById("cart");
//var $cartSlider = document.getElementById("cart-slider");

var cartSlideIndex;
var cartFrameCont = document.getElementById("cart-slider");
var _cartSlide = document.getElementsByClassName("cart-slide");

cartSlideIndex = 1;
offsetWidth = 0;

_cartSlider(cartSlideIndex);

function sliderCurrent(num) {
    _cartSlider(cartSlideIndex = num);
}

function sliderPlus(num) {
    _cartSlider(cartSlideIndex += num);
}
window.onresize = function () {
    var offsetWidth = _cartSlide[cartSlideIndex - 1].offsetLeft;
    cartFrameCont.style.transform = "translate(-" + offsetWidth + "px,0)"
    console.log("fired");
}
function _cartSlider(num) {
    if (num > _cartSlide.length) {
        cartSlideIndex = 1;
    }
    if (num < 1) {
        cartSlideIndex = _cartSlide.length;
    }
    for (var i = 0; i < _cartSlide.length; i++) {
        _cartSlide[i].className = "cart-slide";
    }

    _cartSlide[cartSlideIndex - 1].classList = "cart-slide active";
    var offsetWidth = _cartSlide[cartSlideIndex - 1].offsetLeft;
    cartFrameCont.style.transform = "translate(-" + offsetWidth + "px,0)"
}
//===========================================//
var slideControls = document.getElementsByClassName("cart-next");

for (var i = 0; i < slideControls.length; i++) {
    slideControls[i].addEventListener("click", function () {
       sliderPlus(1);
    });
}

//open and close cart
var _eL = (function () {
    'use strict';
    if ("ontouchstart" in document.documentElement === true) {
        return "touchstart"
    } else {
        return "click";
    }
}());
document.addEventListener(_eL, function (event) {
    var _i = function (el) {
        return !!el && !!(el.offsetWidth === 0);
    }
    var elem = document.getElementById("cart-wrapper");
    // console.log(elem.offsetWidth);
    if (!elem.contains(event.target) && !_i(elem)) {
        elem.className = "cart-wrapper";
        sliderCurrent(1)
        idToggle('product-main', 'active');
    };
});



//======== total calculator ================
// var priceElement = document.getElementsByClassName("price"),
//     totalPriceElement = document.getElementById("total");
// var arrayOfPrices = [];
// (function() {
//   'use strict';
//
//   for (var i = 0; i < priceElement.length; i++) {
//     var priceAttr = priceElement[i].innerHTML;
//     priceAttr = priceAttr.substr(1,priceAttr.length);
//     priceElement[i].setAttribute("value",priceAttr)
//   }
//
//   // ========================================================
//   for (var i = 0; i < priceElement.length; i++) {
//     arrayOfPrices.push(priceElement[i].getAttribute('value'))
//   }
//
// }());

// function recalcTotal() {
//
//   var total = 0;
//
//   for (var i = 0; i < priceElement.length; i++) {
//     var count = document.getElementById("input" + (i+1) +"").value;
//     console.log(count);
//     var pricePerUnit = priceElement[i].getAttribute('value');
//     total += count * pricePerUnit;
//   }
//   totalPriceElement.innerHTML = "$" + total + "";
// }
