# Project Evergreen

Designed & Built with ❤️ for Dad

Started
July 14, 2026

Status
ACTIVE

Mission
Deliver the greatest Christmas surprise possible while documenting the journey from idea to reality.

---

# Lessons Learned

---

## Lesson Learned 001 — Start Simple

**Date:** July 14, 2026

### Lesson

Every software project begins with a simple foundation. A working prototype is far more valuable than waiting for the "perfect" design.

### Takeaway

Build first. Improve continuously.

---

## Lesson Learned 002 — Version Control Is Part of Development

**Date:** July 15, 2026

### Lesson

Git isn't simply a backup tool. Every meaningful change should be documented with a clear commit message, creating a permanent history of the project's evolution.

### Takeaway

The commit history should tell the story of the project.

---

## Lesson Learned 003 — Separate Structure, Style, and Behavior

**Date:** July 15, 2026

### Lesson

HTML, CSS, and JavaScript each have a specific responsibility.

- HTML provides structure.
- CSS controls presentation.
- JavaScript controls behavior.

Keeping these responsibilities separate makes the project easier to understand and maintain.

### Takeaway

Each technology should focus on doing one job well.

---

## Lesson Learned 004 — A Single Source of Truth Simplifies Everything

**Date:** July 15, 2026

### Lesson

Moving project information into a centralized JavaScript object dramatically simplified dashboard updates. Instead of editing multiple files, most project information can now be changed from one location.

### Takeaway

Centralizing data reduces errors and makes future updates significantly easier.

---

## Lesson Learned 005 — Refactoring Improves Code Without Changing Behavior

**Date:** July 15, 2026

### Lesson

Creating reusable helper functions such as `updateText()` removed repetitive code while keeping the dashboard's behavior exactly the same.

Cleaner code is easier to read, maintain, and expand.

### Takeaway

If the same code pattern appears repeatedly, it may belong inside a reusable function.

---

## Lesson Learned 006 — Understanding the Relationship Between HTML and JavaScript

**Date:** July 15, 2026

### Lesson

The dashboard helped reinforce that HTML does not actively request information from JavaScript. Instead, JavaScript locates HTML elements and updates them when the page loads.

Thinking of JavaScript as "bossing the HTML around" created an intuitive mental model for understanding DOM manipulation.

### Takeaway

HTML provides the structure.

JavaScript finds that structure and updates it.

---

## Lesson Learned 007 — Browser Cache Can Mimic Broken Code

**Date:** July 20, 2026

### Lesson

After successfully committing and deploying Sprint 006, GitHub Pages appeared to display an outdated version of the dashboard.

Rather than immediately assuming the code was broken, the engineering process focused on eliminating possible causes one at a time.

The investigation included:

- Verifying local project files.
- Confirming Git commits.
- Reviewing the GitHub repository.
- Checking GitHub Pages deployment settings.
- Testing the live site on a separate device.

The mobile device displayed the correct version of the dashboard, confirming the deployment was successful. The issue was ultimately traced to a cached version of the website in the desktop browser.

A hard refresh (`Ctrl + F5`) immediately resolved the issue.

### Takeaway

Before changing working code, verify deployments systematically and remember that browser caching can produce misleading results during web development.

---

## Lesson Learned 008 — Learning Happens Through Prediction

**Date:** July 15, 2026

### Lesson

Writing code was only part of the learning process. Predicting what the computer would do before running the code made each concept easier to understand and remember.

The most valuable moments came from explaining why something should happen rather than simply observing that it worked.

### Takeaway

Understanding *why* code behaves the way it does builds stronger programming skills than memorizing syntax alone.

---

## Lesson Learned 009 — Questions Reveal Understanding

**Date:** July 15, 2026

### Lesson

Small quizzes at the end of each coding exercise revealed how concepts were connecting together. Rather than testing memorization, the questions helped expose mental models, identify misconceptions, and reinforce new programming concepts.

Each prediction built confidence and transformed coding from following instructions into understanding software engineering.

### Takeaway

The best learning happens when explaining, predicting, and reasoning through code—not simply copying it.

---

## Lesson Learned 010 — Good Architecture Makes Future Features Easier

**Date:** July 20, 2026

### Lesson

Reorganizing the application into logical sections and grouping related data into nested objects improved the structure of the project without changing how the dashboard looked. A well-organized codebase is easier to understand, easier to maintain, and provides a stronger foundation for future features.

### Takeaway

Good software architecture is an investment. The more organized today's code is, the easier tomorrow's development becomes.

---

## Lesson Learned 011 — Knowing When Not to Ship Is Good Engineering

**Date:** July 20, 2026

### Lesson

Development began on a dynamic Mission History feature that would automatically generate dashboard content using arrays and loops. Although the concept was successfully proven, the feature was intentionally postponed rather than forcing an unfinished implementation into the project.

Protecting a stable, working codebase proved more valuable than rushing a new feature.

### Takeaway

Successful engineering is not measured by how many features are started, but by how many are completed well. Sometimes postponing a feature is the most professional decision.