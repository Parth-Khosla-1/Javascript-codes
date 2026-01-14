const projects = [
  {
    title: "Foodie Hamburger Menu",
    desc: "Responsive hamburger menu using HTML, CSS and JavaScript.",
    why: "To practice responsive UI, DOM manipulation and clean CSS.",
    live: "#",
    code: "#"
  },
  {
    title: "XHR Image Loader",
    desc: "Loads image from API using XMLHttpRequest.",
    why: "To understand how browser APIs and async requests work.",
    live: "#",
    code: "#"
  },
  {
    title: "Callback Hell Demo",
    desc: "Shows callback hell and its fix using Promises.",
    why: "To clearly understand why Promises and async/await exist.",
    live: "#",
    code: "#"
  },
  {
    title: "LocalStorage State App",
    desc: "Persists data even after reload using localStorage.",
    why: "To understand browser storage and app state.",
    live: "#",
    code: "#"
  }
];

const container = document.getElementById("projectsContainer");
const modal = document.getElementById("modal");

const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalWhy = document.getElementById("modalWhy");
const modalLive = document.getElementById("modalLive");
const modalCode = document.getElementById("modalCode");

const closeModal = document.getElementById("closeModal");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <button>View Details</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalWhy.textContent = project.why;
    modalLive.href = project.live;
    modalCode.href = project.code;

    modal.classList.remove("hidden");
  });

  container.appendChild(card);
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
