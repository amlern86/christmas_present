// ==========================================
// PROJECT EVERGREEN
// Project Data
// ==========================================

const project = {

    title: "Christmas Present",

    codename: "Project Evergreen",

    progress: 25,

    phase: "Architecture",

    milestone: "Mission Control",

    version: "v0.5 Brain",

    session: 5,

    journalSession: "Session 006",

    journalSprint: "Admin Dashboard",

    updated: "July 15, 2026"
};

// ==========================================
// Helper Functions
// ==========================================

function updateText(id, value, prefix = "") {

    document.getElementById(id).textContent = prefix + value;

}

// ==========================================
// Update the Dashboard
// ==========================================

// Update the percentage
document.getElementById("progress-number").textContent =
    project.progress + "%";

// Update the current phase
updateText("current-phase", project.phase);

// Update the next milestone
updateText("next-milestone", project.milestone);

// Update the build versions
updateText("build-version", project.version);

// Update the updated date
updateText("updated-date", project.updated);

// Update the Engineering Journal
updateText("journal-session", project.journalSession);

updateText(
    "journal-sprint",
    project.journalSprint,
    "Current Sprint: "
);
// Update the progress bar
const progressBar = document.getElementById("progress-fill");

// Start at 0%
progressBar.style.width = "0%";

// Animate to the project percentage
setTimeout(() => {

    progressBar.style.transition = "width 1.8s ease";

    progressBar.style.width = project.progress + "%";

}, 100);

// Verify the project loaded correctly
console.log(project);