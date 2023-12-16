const thumbs = document.querySelectorAll(".product-detail");
const mainImg = document.querySelector("#main-img");

console.log(thumbs)


thumbs.forEach((imgThumb, index) => {
  imgThumb.addEventListener("click", () => {
    mainImg.src = `/assets/img/${index + 1}.jpg`;

  })
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)
  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
});