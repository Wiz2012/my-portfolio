// project.js

const projects = [
  {
    name: "Octapharma Plasma",
    banner: "https://via.placeholder.com/600x300?text=Octapharma+Plasma",
    about: "Plasma donation management platform.",
    challenges: "HIPAA compliance, multi-location scheduling",
    solutions: "Secure workflows, donor data handling",
    duration: "6 months",
    contribution: "Requirement analysis, QA planning",
    tools: "Figma, Jira, Confluence",
    link: "https://www.octapharmaplasma.com/"
  },
  {
    name: "MJ Wholesale",
    banner: "https://via.placeholder.com/600x300?text=MJ+Wholesale",
    about: "Multi-vendor wholesale e-commerce platform.",
    challenges: "Inventory syncing, B2B flow",
    solutions: "Custom pricing tiers, partner portals",
    duration: "4 months",
    contribution: "Wireframes, Dev communication, Testing",
    tools: "Figma, Trello, Slack",
    link: "https://mjwholesale.com/"
  }
];

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const closeBtn = document.getElementById("modalClose");

// Fill modal with project data
function openModal(project) {
  document.getElementById("modalTitle").textContent = project.name;
  document.getElementById("modalBanner").src = project.banner;
  document.getElementById("modalAbout").textContent = project.about;
  document.getElementById("modalChallenges").textContent = project.challenges;
  document.getElementById("modalSolutions").textContent = project.solutions;
  document.getElementById("modalDuration").textContent = project.duration;
  document.getElementById("modalContribution").textContent = project.contribution;
  document.getElementById("modalTools").textContent = project.tools;
  document.getElementById("modalLink").href = project.link;

  modal.style.display = "flex";
}

// Render all project cards
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${p.banner}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.about}</p>
  `;
  card.addEventListener("click", () => openModal(p));
  grid.appendChild(card);
});

// Close modal events
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
