const skiilsH2 = document.querySelector("#skills .h2-heading");
const buttonal = (e) => {
  console.log(e);
};
skiilsH2.addEventListener("click", buttonal);

const skillsList = document.querySelectorAll(".skills__column");
const cbFincton = (event, item) => {
  const activeElement = document.querySelector(".underline");
  console.log(event.target);
  console.log(event.currentTarget);

  if (activeElement) {
    activeElement.classList.remove("underline");
  }

  item.classList.add("underline");
};
skillsList.forEach((item) => {
  item.addEventListener("click", (event) => cbFincton(event, item));
});
