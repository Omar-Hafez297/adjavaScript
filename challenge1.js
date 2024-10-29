const reduxItem = document.querySelector('[data-name="Redux"] .skills__title');
const RTLItem = document.querySelector(
  '[data-name="React testing library"] .skills__title'
);
console.log(RTLItem);

reduxItem.innerText = "Node.js";
RTLItem.innerText = "MongoDB";

const jsItem = document.querySelector('[data-name="Javascript"]');
const tsString = ` <li data-name="Javascript" class="skills__column">
            <h2 class="skills__title">Typescript</h2>
            <span class="skills__years">2 years</span>
          </li>`;
jsItem.insertAdjacentHTML("afterend", tsString);

const findOutLink = document.querySelector(".find-out-link");
findOutLink?.remove();

const bipPic = document.querySelector(".bio__pic");
bipPic.style.width = "36rem";

const skillsList = document.querySelectorAll(".skills__column");
console.log(skillsList);
[...skillsList].map((item) => {
  item.addEventListener("click", () => {
    const activeElement = document.querySelector(".underline");

    if (activeElement) {
      activeElement.classList.remove("underline");
    }

    item.classList.add("underline");
  });
});