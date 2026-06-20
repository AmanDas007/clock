# 🕒 Analog & Digital Clock

A beautifully designed real-time analog clock built using HTML, CSS, and JavaScript. It visually represents hours, minutes, and seconds using rotating clock hands updated every second.

---

## 🌍 Live Demo

(Optional) Add your deployed link here  
Example: https://your-clock-app.vercel.app

---

## ✨ Features

- 🕰️ Real-time analog clock movement
- ⏱️ Smooth hour, minute, and second hand rotation
- 🎨 Clean and modern UI design
- 📍 Accurate time synchronization using JavaScript `Date()`
- 🔁 Auto-updates every second
- 📱 Fully responsive centered layout

---

## 🧠 How It Works

- JavaScript `Date()` object fetches current system time
- Hours, minutes, and seconds are extracted
- Each hand is rotated using calculated degrees:
  - Hour hand → `30 * hours + minutes / 2`
  - Minute hand → `6 * minutes + seconds / 10`
  - Second hand → `6 * seconds`
- `setInterval()` updates the clock every second

---

## 🏗️ Project Structure

```bash
clock/
│
├── index.html     # Clock structure and UI
├── styles.css     # Styling and clock design
├── script.js      # Time logic and hand rotation
