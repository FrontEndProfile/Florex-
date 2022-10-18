 

$('.dropdown-menu').on('click', function(event){ 
    event.stopPropagation();
});

var $range = $(".js-range-slider"),
    $from = $(".from"),
    $to = $(".to"),
    range,
    min = $range.data('min'),
    max = $range.data('max'),
    from,
    to;

var updateValues = function () {
    $from.prop("value", from);
    $to.prop("value", to);
};

$range.ionRangeSlider({
    onChange: function (data) {
        from = data.from;
        to = data.to;
        updateValues();
    }
});

range = $range.data("ionRangeSlider");
var updateRange = function () {
    range.update({
        from: from,
        to: to
    });
};

$from.on("input", function () {
    from = +$(this).prop("value");
    if (from < min) {
        from = min;
    }
    if (from > to) {
        from = to;
    }
    updateValues();
    updateRange();
});

$to.on("input", function () {
    to = +$(this).prop("value");
    if (to > max) {
        to = max;
    }
    if (to < from) {
        to = from;
    }
    updateValues();
    updateRange();
});


/**** MENU SEARCH ***** */

const searchbtn = document.querySelector('.search__bar li a');
const searchbtn2 = document.querySelector('.search__bar li a.field')
const body = document.body;
searchbtn.addEventListener('click', () => {
    body.classList.toggle('search-open')
})
searchbtn2.addEventListener('click', () => {
    body.classList.toggle('search-open')
})





const list = document.querySelector('.menuSearch')
const search = document.querySelector('.searchField')
search.addEventListener(('keyup'), e => {
  e.preventDefault()
  const term = search.value.trim();
  filtertodos(term)
})
// Filter
const filtertodos = term => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
}
// Search
search.addEventListener(('keyup'), e => {
  e.preventDefault()
  const term = search.value.trim();
  filtertodos(term)
})
/**** QUANTITY CODE ***** */
let minusBtn = document.getElementById("minus-btn");
let count = document.getElementById("count");
let plusBtn = document.getElementById("plus-btn");

let countNum = 0;
count.innerHTML = countNum;

minusBtn.addEventListener("click", () => {
    countNum -= 1;
    count.innerHTML = countNum;
});

plusBtn.addEventListener("click", () => {
    countNum += 1;
    count.innerHTML = countNum;
});


/****** Initialize Swiper ******/

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


