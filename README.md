# Agni's Empathy Builder

This is a professional, standalone web application designed to help users develop empathy and "Theory of Mind" through a process of **guided self-reflection**.

## The Methodology: Guided Self-Reflection

This tool moves beyond simplistic, automated scoring. True empathy is nuanced and cannot be graded by a simple script. Instead, this application serves as a framework for you to analyze your own thought processes.

1.  **Analyze a Neutral Case Study:** You will be presented with a situation written in a neutral, third-person perspective. This allows you to understand the facts of the scenario without immediate emotional bias.
2.  **Receive Your Assignment:** After reading the case study, you will be assigned the role of one of the characters involved.
3.  **Assume the Perspective:** Your task is to write from the first-person ("I", "me") viewpoint of your assigned character. The goal is to articulate what you believe are their hidden fears, needs, and motivations that lead to their actions.
4.  **Compare and Reflect:** After submitting your take, the application will present your response directly alongside an **Expert Analysis**. By comparing your perspective with the expert breakdown of psychological drivers and common judgment traps, you can perform a meaningful self-assessment and identify your own empathetic blind spots.

## Features

-   **Fully Offline & Deployable:** Runs entirely in the browser with no external API calls, making it fast, private, and easy to host on any static web server.
-   **Focus on Self-Reflection:** The side-by-side comparison model encourages deeper learning and self-awareness instead of chasing a superficial score.
-   **Expandable Scenarios:** The scenario library is stored in a separate, easy-to-edit `scenarios.js` file.
-   **Professional UI:** Clean, responsive design that works on both desktop and mobile browsers.
-   **Filtering & Search:** Users can easily find scenarios by category, difficulty, or keywords.

## How to Run Locally

No build process or server is required. Simply open the `index.html` file in any modern web browser.

## How to Add New Scenarios

The application is designed to be easily expandable.

1.  **Open `scenarios.js`:** This file contains the entire library of scenarios.
2.  **Add a New Scenario Object:** At the end of the `ALL_SCENARIOS` array, add a new JavaScript object following the existing structure.

**Scenario Template:**
```javascript
{
    id: 999, // IMPORTANT: Use a new, unique number!
    title: "Your New Scenario Title",
    category: "Family & Home", // Must be one of the existing categories
    difficulty: "Easy", // "Easy", "Medium", or "Hard"
    empathyTarget: "The character to empathize with", // e.g., "The colleague", "The shopkeeper"
    situation: "A detailed, third-person description of the situation.",
    yourFeeling: "The initial, biased emotional reaction of the 'protagonist' in the situation.",
    otherAction: "The specific action taken by the empathy target.",
    idealPerspective: {
        keywords: ["fear", "stress", "anxiety"], // The core psychological drivers to be revealed in the analysis.
        avoid: ["selfish", "lazy", "stupid"], // Common judgment traps to highlight.
        goal: "A short summary of the empathetic insight.",
        resolution: "An example of an ideal, empathy-informed response."
    }
}
```
3.  **Save the File:** Save your changes to `scenarios.js`. The application will automatically include the new scenarios the next time it is loaded.

## How to Deploy (for free)

You can easily deploy this application for free using GitHub Pages.

1.  **Go to your repository's settings:** In your GitHub repository (`Agni-s-Empathy-Builder`), click on the "Settings" tab.
2.  **Navigate to Pages:** In the left sidebar, click on "Pages".
3.  **Select Source:** Under "Build and deployment", for the "Source", select "Deploy from a branch".
4.  **Choose Branch:** Select the `master` (or `main`) branch and keep the folder as `/ (root)`. Click "Save".
5.  **Wait and Visit:** After a minute or two, your site will be live. A green bar will appear with the public URL (e.g., `https://your-username.github.io/Agni-s-Empathy-Builder/`).
