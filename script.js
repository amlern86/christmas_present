// ==========================================
// PROJECT EVERGREEN
// Mission Control
// ==========================================

const project = {

    title: "Christmas Present",

    codename: "Project Evergreen",

    progress: 25,

    phase: "Mission Control",

    milestone: "Dynamic Mission History",

    version: "v0.6 Mission Control",

    session: 6,

    journal: {

        session: "Session 006",

        sprint: "Mission Control"

    },

    updated: "July 20, 2026",

    quote: "\"Progress isn't always visible, but it's always valuable.\""

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
updateText("quote", project.quote);

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