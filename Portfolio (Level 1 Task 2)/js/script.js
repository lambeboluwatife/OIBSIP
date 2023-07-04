const content = document.querySelector(".responsive-portfolio-content");

const fetchData = () => {
  fetch("../data/portfolio.json")
    .then((res) => res.json())
    .then((datas) => {
      datas.forEach((data) => {
        const { name, skills, image, desc, live, source, id } = data;

        const dataElement = document.createElement("div");
        dataElement.classList.add("work-items");

        dataElement.innerHTML = `
            <div class="img-area">
              <img src="${image}" alt="${name}" />
            </div>
          <div class="work-details">
            <h4>${name}</h4>
            <h6>${skills}</h6>
            <h6>
              <b>${desc}</b>
            </h6>
            <a href=${live} rel="noreferrer" target="_blank">
              <button>Live Site</button>
            </a>

            <a href=${source} rel="noreferrer" target="_blank">
              <button>Source Code</button>
            </a>
          </div>
      `;

        content.appendChild(dataElement);
      });
    });
};

fetchData();

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const open = document.getElementById("open-menu");
const close = document.getElementById("close-menu");
const dropdown = document.getElementById("dropdown");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  dropdown.style.display = "block";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "block";
  dropdown.style.display = "none";
});
