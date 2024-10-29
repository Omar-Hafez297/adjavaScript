const skiilsH2 = document.querySelector("#skills .h2-heading");
const buttonal = () => alert("you click me");

skiilsH2.addEventListener("click", buttonal);

const skillsList = document.querySelectorAll(".skills__column");
const cbFincton = (item) => {
  const activeElement = document.querySelector(".underline");
  alert("xoxo");

  if (activeElement) {
    activeElement.classList.remove("underline");
  }

  item.classList.add("underline");
};
skillsList.forEach((item) => {
  item.addEventListener("click", () => cbFincton(item));
});
