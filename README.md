# Personal Productivity Dashboard 🚀

A custom "New Tab" Chrome Extension designed to replace the default browser start page with a focused, personal command center.

## 🌟 Features

- **Dynamic Backgrounds:** Fetches a fresh, high-resolution nature wallpaper from Unsplash/Lorem Picsum on every load to keep the interface inspiring.
- **Live Weather Widget:** Displays real-time temperature data for **Nagoya** using the Open-Meteo API (No API key required).
- **Smart Greeting:** Automatically adjusts the greeting ("Good Morning", "Good Evening") based on your local time.
- **Persistent Todo List:** Uses **Local Storage** to save your tasks. Tasks remain saved even after closing the browser or restarting the computer.
- **Glassmorphism UI:** Modern, aesthetic design with semi-transparent elements and blur effects.

## 🛠️ Built With

- **HTML5 & CSS3** (Flexbox, CSS Variables, Backdrop Filter)
- **JavaScript (ES6+)** (Async/Await, DOM Manipulation, Local Storage)
- **Chrome Extension API** (Manifest V3)
- **APIs:**
  - [Open-Meteo](https://open-meteo.com/) (Weather data)
  - [Lorem Picsum](https://picsum.photos/) (Random imagery)

## 📥 Installation Guide

Since this is a custom extension, you need to install it in "Developer Mode".

1. **Clone or Download** this repository to a folder on your computer.
2. Open **Google Chrome** (or Edge/Brave).
3. In the address bar, type: `chrome://extensions` and press Enter.
4. Toggle the **Developer mode** switch in the top-right corner to **ON**.
5. Click the **Load unpacked** button that appears on the top-left.
6. Select the folder where you saved this project (`personal-dashboard`).
7. Open a **New Tab** and enjoy your new dashboard!

## 📂 Project Structure

```text
personal-dashboard/
│
├── manifest.json     # Configuration file for Chrome
├── index.html        # The main structure
├── style.css         # Styling and Glassmorphism effects
├── script.js         # Logic for API calls, Clock, and Todo list
└── README.md         # Documentation
