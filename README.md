# Agni's Empathy Builder

This is a recommended tool designed to help users develop empathy and "Theory of Mind" by analyzing challenging interpersonal scenarios.

## The Methodology

1.  **Analyze a Neutral Case Study:** The application presents a situation written in a neutral, third-person perspective from a wide range of real-world categories.
2.  **Receive Your Assignment:** After reading the case study, you are assigned the role of one of the characters involved.
3.  **Assume the Perspective:** Your task is to write from the first-person ("I", "me") viewpoint of your assigned character. Detailed prompts guide you to articulate that character's hidden fears, needs, and justifications for their actions.
4.  **Receive a Holistic Score & Analysis:** An advanced local engine analyzes your response based on multiple factors, including depth of insight, avoidance of bias, and perspective adherence. It provides a holistic score and a descriptive analysis explaining the reasoning behind your score.

## Features

-   **Fully Offline & Deployable:** Runs entirely in the browser, making it fast, private, and easy to host.
-   **Holistic Scoring:** The local analysis engine provides a score and a descriptive justification, moving beyond simple keyword matching.
-   **Expandable Scenarios:** The scenario library is in a separate `scenarios.js` file, pre-populated with 75 scenarios across 25 targeted categories.
-   **Clear UI:** The interface is designed to be clean, responsive, and provide detailed guidance at each step.

## Scenario Categories

The application includes scenarios across 25 distinct categories, including:
- Conflict Resolution
- Customer Support and Service
- Leadership and Team Management
- Teaching and Mentoring
- Therapy and Counseling
- Medical and Healthcare Interactions
- Parent–Child Communication
- Romantic Relationships
- ...and 17 more.

## How to Add New Scenarios

1.  **Open `scenarios.js`:** This file contains the scenario library.
2.  **Add a New Scenario Object:** Add a new JavaScript object to the `ALL_SCENARIOS` array, following the structure of the existing scenarios. Ensure you provide a unique `id`.

## How to Deploy (for free)

This application can be deployed for free using GitHub Pages.

1.  **Go to Repository Settings:** In your GitHub repository, click on the "Settings" tab.
2.  **Navigate to Pages:** In the left sidebar, click on "Pages".
3.  **Select Source:** Under "Build and deployment," select "Deploy from a branch."
4.  **Choose Branch:** Select the `master` (or `main`) branch, keep the folder as `/ (root)`, and click "Save".
5.  **Wait and Visit:** After a minute, your site will be live at the provided public URL.