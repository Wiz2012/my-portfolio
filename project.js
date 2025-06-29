// /project.js


const baseId = "app7912tAjdpdGLv6";
const tableName = "Portfolio Projects"; // replace with your actual table name
const token = "pat6yR5CxXZKwu8JI.59c985248fbcf58aab50c7034e85072f1e674163507b07090d1757127c802f51";

 // index.js


const endpoint = `https://api.airtable.com/v0/${baseId}/${tableName}`;

const grid = document.getElementById("project-grid");
const modal = document.getElementById("project-modal");
const closeModal = document.querySelector(".close");

// Fill modal function
function fillModal(project) {
  document.getElementById("modal-name").textContent = project.Name;
  document.getElementById("modal-banner").src = project.Banner?.[0]?.url || '';
  document.getElementById("modal-about").textContent = project.About || '';
  document.getElementById("modal-challenges").textContent = project.Challenges || '';
  document.getElementById("modal-solutions").textContent = project.Solutions || '';
  document.getElementById("modal-duration").textContent = project.Duration || '';
  document.getElementById("modal-contribution").textContent = project.Contribution || '';
  document.getElementById("modal-tools").textContent = project.Tools || '';
  document.getElementById("modal-link").href = project["Live Link"] || '#';
  modal.style.display = "flex";
}

// Close modal
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

fetch(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(res => res.json())
.then(data => {
  data.records.forEach(record => {
    const p = record.fields;

    // Create each card
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${p.Banner?.[0]?.url || ''}" alt="${p.Name}" style="width:100%;">
      <h3>${p.Name}</h3>
    `;

    card.onclick = () => fillModal(p);
    grid.appendChild(card);
  });
})
.catch(err => {
  grid.innerHTML = "<p>Error loading projects.</p>";
  console.error("Error:", err);
});
