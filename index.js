// toggle
const toggle = document.querySelector(".toggle");
const linksContainer = document.querySelector(".links-container");
const listMain = document.querySelector(".list-main");
toggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linkHeight = listMain.getBoundingClientRect().height;

  if (containerHeight === 0) linksContainer.style.height = `${linkHeight}px`;
  else {
    linksContainer.style.height = 0;
  }
});

const nav = document.querySelector(".navbarMain");
const btt = document.querySelector(".btt");
window.addEventListener("scroll", function () {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 400) btt.classList.add("show-btt");
  else btt.classList.remove("show-btt");
});
// closes nav after using links
const scrollLinks = document.querySelectorAll(".scroll-link");
console.log(scrollLinks);
scrollLinks.forEach((element) => {
  element.addEventListener("click", function (e) {
    linksContainer.style.height = 0;
  });
});
