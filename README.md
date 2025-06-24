
# Linux Distro Installation Helper

Welcome to the Linux Distro Installation Helper! This web application, built with React, Tailwind CSS, and powered by the Google Gemini API, aims to provide users with essential information and general installation guides for various Linux distributions.

![Linux Distro Guide Screenshot](placeholder_screenshot.png) 
*(Replace placeholder_screenshot.png with an actual screenshot of your application)*

## ✨ Features

*   **Distro Selection:** Easily choose from a curated list of popular Linux distributions.
*   **Detailed Information:** Get concise details for each selected distribution, including:
    *   **Description:** A brief overview of the distro.
    *   **Official Website:** A direct link to the distro's homepage.
    *   **System Requirements:** Typical minimum or recommended hardware specifications.
    *   **General Installation Guide:** A step-by-step guide covering the basic installation process (e.g., creating a bootable USB, main installation phases).
*   **AI-Powered Content:** All information is dynamically fetched using the Google Gemini API, ensuring up-to-date and relevant details.
*   **Responsive Design:** User-friendly interface that adapts to various screen sizes, thanks to Tailwind CSS.
*   **Modern UI/UX:** A sleek and intuitive design with engaging loading states and clear error handling.
*   **API Key Handling:** Clear notification if the required Gemini API key is not configured.

## 🚀 Technologies Used

*   **Frontend:**
    *   [React](https://reactjs.org/)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [Tailwind CSS](https://tailwindcss.com/)
*   **API:**
    *   [@google/genai (Google Gemini API)](https://ai.google.dev/docs)
*   **Build/Environment:**
    *   ES Modules (via esm.sh for browser-based development)

## 🛠️ Setup and Installation

This project is designed to run directly in the browser using ES Modules and does not require a separate build step for development.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/linux-distro-helper.git
    cd linux-distro-helper
    ```

2.  **Configure API Key:**
    *   This application **requires** a Google Gemini API key to function.
    *   You need to set the `API_KEY` environment variable. The application (`services/geminiService.ts` and `App.tsx`) is set up to read `process.env.API_KEY`.
    *   **Important:** Since this is a client-side application, directly embedding `process.env.API_KEY` in the served JavaScript means the key will be exposed in the browser. For local development or a controlled environment, you can simulate this.
    *   One way to handle this for local development is to create a `.env` file (which should be in your `.gitignore`) and use a tool or script to make this variable available when serving the `index.html`.
    *   Alternatively, for quick local testing **ONLY**, you could temporarily replace `process.env.API_KEY` in `services/geminiService.ts` with your actual API key string. **NEVER commit your API key to a public repository.**

    Example `services/geminiService.ts` (for temporary local testing - **NOT FOR PRODUCTION OR PUBLIC REPO**):
    ```typescript
    // In services/geminiService.ts
    // const API_KEY = process.env.API_KEY; // Original
    const API_KEY = "YOUR_ACTUAL_GEMINI_API_KEY"; // Temporary for local testing
    ```
    Remember to revert this change before committing. The ideal way is to have the `process.env.API_KEY` be set by the environment serving the files.

3.  **Serve the `index.html` file:**
    *   You can use a simple HTTP server to serve the project files. One common way is using the `serve` package or Python's built-in HTTP server.
    *   Using `serve` (if you have Node.js/npm):
        ```bash
        npx serve .
        ```
    *   Using Python 3:
        ```bash
        python -m http.server
        ```
    *   Then, open your browser and navigate to the provided local URL (e.g., `http://localhost:3000` or `http://localhost:8000`).

## 📖 Usage

1.  Ensure your Gemini API key is correctly configured and accessible to the application.
2.  Open the `index.html` file in your browser (or the URL provided by your local server).
3.  Use the dropdown menu labeled "Explore a Linux Distribution" to select a Linux distro.
4.  Once a distribution is selected:
    *   The application will fetch and display its details (description, website, system requirements, installation guide).
    *   A loading indicator will be shown while data is being fetched.
    *   Any errors during data fetching will be displayed.
5.  To view information for another distribution, simply select it from the dropdown.
6.  Click the "Clear Selection" button to reset the view.

## Screenshots

*(Add screenshots of your application here. For example:)*

**Main Interface / Initial State:**
![Initial State Screenshot](placeholder_initial.png)

**Distro Selected & Details Displayed:**
![Distro Details Screenshot](placeholder_details.png)

*(Tip: You can drag and drop images into the GitHub text editor to upload them and get a markdown link.)*

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (though a LICENSE.md file is not yet created in this project). It's good practice to add one, e.g., the MIT License.

---

Built with ❤️ and the power of Linux & AI.
Enjoy exploring the Linux universe!
