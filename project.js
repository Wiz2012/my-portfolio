// project.js

const projects = [
  {
    name: "Octapharma Plasma",
    category: "healthcare",
    banner: "https://via.placeholder.com/600x300?text=Octapharma+Plasma",
    about: "Plasma donation platform with HIPAA compliance.",
    challenges: "Complex scheduling, regulation compliance",
    solutions: "HIPAA-compliant modules, donor tracking",
    duration: "6 months",
    contribution: "Requirement gathering, testing",
    link: "https://www.octapharmaplasma.com/"
  },
  {
    name: "MJ Wholesale",
    category: "ecommerce",
    banner: "https://via.placeholder.com/600x300?text=MJ+Wholesale",
    about: "B2B wholesale marketplace for inventory management.",
    challenges: "Bulk orders, vendor system",
    solutions: "Custom modules, portal integration",
    duration: "4 months",
    contribution: "UI collaboration, QA",
    link: "https://mjwholesale.com/"
  }
];

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const closeBtn = document.getElementById("modalClose");

function openModal(p) {
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalBanner").src = p.banner;
  document.getElementById("modalAbout").textContent = p.about;
  document.getElementById("modalChallenges").textContent = p.challenges;
  document.getElementById("modalSolutions").textContent = p.solutions;
  document.getElementById("modalDuration").textContent = p.duration;
  document.getElementById("modalContribution").textContent = p.contribution;
  document.getElementById("modalLink").href = p.link;
  modal.style.display = "flex";
}

function renderProjects(projects) {
  grid.innerHTML = "";
  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = `project-card ${p.category}`;
    div.innerHTML = `<h3>${p.name}</h3><img src="${p.banner}" /><p>${p.about}</p>`;
    div.onclick = () => openModal(p);
    grid.appendChild(div);
  });
}

function filterProjects(category) {
  const filtered = category === "all" ? projects : projects.filter(p => p.category === category);
  renderProjects(filtered);
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// Initial Render
renderProjects(projects);

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
