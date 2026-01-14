const projects = [
  {
    title: "Foodie Hamburger Menu",
    desc: "Responsive hamburger menu using HTML, CSS and JavaScript.",
    why: "To practice responsive UI, DOM manipulation and clean CSS.",
    live: "https://js-pro-2.netlify.app/",
    code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/DECEMBER/dec%2021/JS_Pro_ep_3"
  },
 {
  title: "Newsletter Modal Popup",
  desc: "A custom modal popup for newsletter subscription with overlay, close actions, and responsive design.",
  why: "I built this to understand how modals work without libraries, including overlay handling, class-based toggling, and user interaction flows.",
  live: "https://js-pro-3.netlify.app/",
  code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/DECEMBER/dec%2024/JS_Pro_ep4_self"
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
