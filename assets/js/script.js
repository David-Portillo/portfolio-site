const navLinks = document.querySelectorAll("a.inner-link");
console.log(navLinks);

navLinks.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector("nav ul li a.active").classList.remove("active");
    document
      .querySelector(`nav ul li a[href="${item.getAttribute("href")}"]`)
      .classList.add("active");
    document.querySelector("main > section.active").classList.remove("active");
    document
      .querySelector(`main > section${item.getAttribute("href")}`)
      .classList.add("active");
  });
});

document
  .querySelector("#sidebar .toggle-sidebar")
  .addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("open");
  });

new Typed(".field h2", {
  strings: ["Front-End web developer", "Back-End developer"],
  typeSpeed: 70,
  backSpeed: 10,
  loop: true,
});

for (let i = 1; i <= 15; i++) {
  let meteor = document.createElement("span");
  meteor.classList = "meteor";
  document.querySelector("#home .meteor-shower").append(meteor);
}

// Shuffle.js

const shuffleInstance = new Shuffle(
  document.querySelector("#work .work-items"),
  {
    itemSelector: ".item",
  }
);

const filterButtons = document.querySelectorAll("#work .filters button");

filterButtons.forEach((item) => {
  item.addEventListener("click", workFilter);
});

function workFilter() {
  const clickedButton = event.currentTarget;
  const clickedGroup = clickedButton.getAttribute("data-group");
  const activeButton = document.querySelector("#work .filters button.active");

  activeButton.classList.remove("active");
  clickedButton.classList.add("active");
  console.log(activeButton);

  shuffleInstance.filter(clickedGroup);
}

const workElements = document.querySelectorAll("#work .work-items .wrap");

const workModal = new bootstrap.Modal("#workModal");

workElements.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.getAttribute("data-image"));
    const attributes = Array.from(item.attributes)
      .filter((attr) => attr.name.startsWith("data-"))
      .reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {});

    console.log(attributes);

    document
      .querySelector("#workModal .modal-body img")
      .setAttribute("src", attributes["data-image"]);
    document.querySelector("#workModal .modal-body .title").innerHTML =
      attributes["data-title"];
    document.querySelector("#workModal .modal-body .description").innerHTML =
      attributes["data-description"];
    document.querySelector("#workModal .modal-body .client .title").innerHTML =
      attributes["data-client"];
    document.querySelector("#workModal .modal-body .calendar .title").innerHTML =
      attributes["data-completed"];
    document.querySelector("#workModal .modal-body .skills .title").innerHTML =
      attributes["data-skills"];
    document
      .querySelector("#workModal .modal-body .project-link a")
      .setAttribute("href", attributes["data-project-link"]);
    workModal.show();
  });
});

const workModalElement = document.getElementById("workModal");

workModalElement.addEventListener("show.bs.modal", () => {
  document.getElementById("work").classList.add("blur");
  document.getElementById("sidebar").classList.add("blur");
});

workModalElement.addEventListener("hide.bs.modal", () => {
  document.getElementById("work").classList.remove("blur");
  document.getElementById("sidebar").classList.remove("blur");
});
