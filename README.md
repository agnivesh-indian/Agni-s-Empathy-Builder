# Agni's Empathy Builder

This is a professional, standalone web application designed to help users develop empathy and "Theory of Mind" by analyzing complex social scenarios relevant to the Indian context.

## How it Works

1.  **Analyze a Neutral Situation:** The application presents a case study written in a neutral, third-person perspective.
2.  **Receive Your Assignment:** After reading the case study, the user is assigned the role of one of the characters involved.
3.  **Assume the Perspective:** The user's task is to write from the first-person ("I", "me") viewpoint of their assigned character, articulating that character's hidden fears, needs, and motivations.
4.  **Receive a Personalized Analysis:** An advanced, local, rule-based analysis engine provides a detailed breakdown of the user's performance. It goes beyond simple keyword matching to analyze the structure and content of the response, highlighting specific successes and areas for improvement.

## Features

-   **Fully Offline & Deployable:** Runs entirely in the browser with no external API calls, making it fast, private, and easy to host on any static web server.
-   **Advanced Local Analysis:** Uses a sophisticated JavaScript-based engine for instant, personalized feedback that respects user privacy.
-   **Expandable Scenarios:** The scenario library is stored in a separate, easy-to-edit `scenarios.js` file.
-   **Professional UI:** Clean, responsive design that works on both desktop and mobile browsers.
-   **Filtering & Search:** Users can easily find scenarios by category, difficulty, or keywords.

## How to Run Locally

No build process or server is required. Simply open the `index.html` file in any modern web browser.

## How to Add New Scenarios

The application is designed to be easily expandable.

1.  **Open `scenarios.js`:** This file contains the entire library of scenarios.
2.  **Add a New Scenario Object:** At the end of the `ALL_SCENARIOS` array, add a new JavaScript object.

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
        keywords: ["fear", "stress", "anxiety"], // Keywords for a good empathetic response
        avoid: ["selfish", "lazy", "stupid"], // Judgmental words to avoid
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