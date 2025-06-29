// /project.js

const slug = new URLSearchParams(window.location.search).get('slug');

const baseId = "app7912tAjdpdGLv6";
const tableName = "Portfolio Projects"; // replace with your actual table name
const token = "pat6yR5CxXZKwu8JI.59c985248fbcf58aab50c7034e85072f1e674163507b07090d1757127c802f51";

fetch(`https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula={Slug}='${slug}'`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(res => res.json())
.then(data => {
  if (data.records.length === 0) {
    document.getElementById("project-container").innerHTML = `<p>Project not found.</p>`;
    return;
  }

  const p = data.records[0].fields;

  document.getElementById("project-name").textContent = p.Name;
  document.getElementById("project-banner").src = p.Banner[0]?.url || "";
  document.getElementById("about").textContent = p.About || "";
  document.getElementById("challenges").textContent = p.Challenges || "";
  document.getElementById("solutions").textContent = p.Solutions || "";
  document.getElementById("duration").textContent = p.Duration || "";
  document.getElementById("contribution").textContent = p.Contribution || "";
  document.getElementById("tools").textContent = p.Tools || "";
  document.getElementById("live-link").href = p["Live Link"] || "#";
})
.catch(err => {
  console.error("Error loading project:", err);
  document.getElementById("project-container").innerHTML = `<p>Error loading project.</p>`;
});
