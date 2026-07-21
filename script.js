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

    session: 6,

    journal: {

        session: "Session 006",

        sprint: "Admin Dashboard"

    },

    updated: "July 15, 2026"

};

// ==========================================
// Helper Functions
// ==========================================

function updateText(id, value, prefix = "") {

    document.getElementById(id).textContent = prefix + value;

}

function animateProgress(percent) {

    const progressBar = document.getElementById("progress-fill");

    progressBar.style.width = "0%";

    setTimeout(() => {

        progressBar.style.transition = "width 1.8s ease";

        progressBar.style.width = percent + "%";

    }, 100);

}

// ==========================================
// Update the Dashboard
// ==========================================

// Progress
updateText("progress-number", project.progress + "%");
animateProgress(project.progress);

// Project Status
updateText("current-phase", project.phase);
updateText("next-milestone", project.milestone);
updateText("build-version", project.version);
updateText("updated-date", project.updated);

// Engineering Journal
updateText("journal-session", project.journal.session);

updateText(
    "journal-sprint",
    project.journal.sprint,
    "Current Sprint: "
);

// ==========================================
// Initialization
// ==========================================

console.log(project);