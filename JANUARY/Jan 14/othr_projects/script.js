const projects = [
  {
    title: "Foodie Hamburger Menu",
    desc: "Responsive hamburger menu using HTML, CSS and JavaScript.",
    why: "To practice responsive UI, DOM manipulation and clean CSS.",
    live: "https://parth-project-02.netlify.app/",
    code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/DECEMBER/dec%2021/JS_Pro_ep_3"
  },
 {
  title: "Newsletter Modal Popup",
  desc: "A custom modal popup for newsletter subscription with overlay, close actions, and responsive design.",
  why: "I built this to understand how modals work without libraries, including overlay handling, class-based toggling, and user interaction flows.",
  live: "https://parth-project-3.netlify.app/",
  code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/DECEMBER/dec%2024/JS_Pro_ep4_self"
},
{
  title: "Netflix Clone (India)",
  desc: "A Netflix landing page replica with responsive hero section, sections for devices, offline download, kids profiles, FAQ accordion, and footer.",
  why: "I built this to practice responsive web design, layout structuring, media queries, and replicating real-world UI components from a professional streaming service.",
  live: "https://drive.google.com/file/d/1hqLVGnOcOSDzdS5XvV0yj4FOGk7r1SUw/view?usp=drive_link",
  code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/PROJECTS(html_and_css)/pro2"
},
{
  title: "Amazon Clone",
  desc: "A replica of Amazon's homepage featuring navigation bars, search, product sections, and footer layout with responsive design.",
  why: "I built this to practice creating complex layouts, responsive product sections, navbars, and footers while mimicking a professional e-commerce site.",
  live: "https://parth-project-07.netlify.app/",
  code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/PROJECTS(html_and_css)/pro4"
},
{
  title: "Paramvah Studios Clone",
  desc: "A landing page for a film studio featuring a scrolling film reel, upcoming films section, embedded YouTube trailers, and detailed footer with studio info and social links.",
  why: "I built this to practice advanced layout techniques, horizontal scrolling animations, responsive video embedding, and creating multi-section landing pages similar to professional studio websites.",
  live: "https://parth-project-08.netlify.app/",
  code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/PROJECTS(html_and_css)/pro5"
},
{
  title: "IKGPTU Amritsar Campus Clone",
  desc: "A university landing page clone featuring sticky header navigation, announcements section, information panels, event cards, and a structured footer with campus listings.",
  why: "I built this to practice complex layout structuring, responsive flexbox usage, card designs, and information hierarchy for educational websites.",
  live: "https://parth-project-09.netlify.app/",
  code: "https://github.com/Parth-Khosla-1/Javascript-codes/blob/main/PROJECTS(html_and_css)/pro6/index.html"
},
{
  title: "Heart Beating Animation",
  desc: "A CSS-only animated heart effect demonstrating scaling and rotation to simulate a heartbeat, with glowing highlights and pseudo-elements for realistic heart shapes.",
  why: "I built this to practice CSS animations, keyframes, pseudo-elements (::before and ::after), and shape creation using pure CSS without images or JavaScript.",
  live: "https://parth-project-5.netlify.app/",
  code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/PROJECTS(html_and_css)/DIL"
},
{
  title: "UltraEdit Download Page Clone",
  desc: "A responsive clone of the UltraEdit download page built using HTML and CSS. The website features a navigation bar, hero section, call-to-action buttons, and a grid-based layout for downloading different language versions of the software.",
  why: "I built this project to strengthen my understanding of HTML structure, CSS Flexbox and Grid, responsive design using media queries, and real-world website layout cloning.",
  live: "https://parth-project-06.netlify.app/",
  code: "https://github.com/Parth-Khosla-1/Javascript-codes/tree/main/PROJECTS(html_and_css)/pro"
},
{
  title: "CSS Transform Properties Demo",
  desc: "A visual demonstration of all major CSS transform properties including translate, scale, rotate, skew, matrix, 3D transforms, perspective, transform-origin, and transform-style.",
  why: "I built this to deeply understand how CSS transform functions work in both 2D and 3D space, and to practice animations and interactive UI effects using hover-based transformations.",
  live: "https://neon-puffpuff-e1d20a.netlify.app/",
  code: ""
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
