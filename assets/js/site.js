const thumbs = document.querySelectorAll(".product-detail");
const mainImg = document.querySelector("#main-img");

thumbs.forEach((imgThumb, index) => {
  imgThumb.addEventListener("click", () => {
    mainImg.src = `/assets/img/${index + 1}.jpg`;
  })
})

