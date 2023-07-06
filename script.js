//The Simpsons API
simpsonsAPI = "https://thesimpsonsquoteapi.glitch.me/quotes?count=50";
//get Elements
//Functions
loadingBeforeApi();
function fetchData() {
  fetch(simpsonsAPI)
    .then((response) => response.json())
    .then((data) => {
      displayCharUI(data);
      showSlides(slideIndex);
    });
}
function loadingBeforeApi() {
  const div = document.querySelector(".slideshow-container");
  let loadingHTML = `
    <div class="loading-title">Loading...</div>
    <img class="loading-char-img" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
  `;
  div.insertAdjacentHTML("beforeend", loadingHTML);
  fetchData();
}

function displayCharUI(char) {
  console.log(char);
  const div = document.querySelector(".slideshow-container");
  document.querySelector(".loading-title").style.display = "none";
  document.querySelector(".loading-char-img").style.display = "none";
  char.forEach((char) => {
    let charHTML = `
    <div class="mySlides fade">
        <div class="title">${char.character}</div>
        <img class="char-img" src=${char.image} />
        <div class="text">${char.quote}</div>
    </div>
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
    `;
    div.insertAdjacentHTML("beforeend", charHTML);
  });
}

//Slide Show Functionality from W3 Schools
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
