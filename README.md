# IoT Web Controller 🎛️🌡️

A real-time **Internet of Things (IoT) web dashboard & controller** built as a project for the course **Web Fundamentals**.  
This full-stack system lets users and admins interact with Raspberry Pi IoT hardware in real time and manage sensor/device data through a modern web UI.

---

## 🚀 Features

### 🧠 User Functionality
- **Realtime RGB LED control** — change color and power state.
- **Realtime button feedback** from the Pi.
- **Simon Says game** powered by physical button presses.

### 👩‍💼 Admin Functionality
- **CRUD interface** for Devices and Sensors.
- Admin-only views to manage and organize hardware metadata.

### 🔌 Live Updates
- Uses WebSockets for instant UI refresh on hardware state changes.
- Dynamic Vue frontend communicates with IoT backend without page reloads.

---

## 🏗️ Architecture

This project is a full‑stack IoT web controller that connects **real hardware** (Raspberry Pi) with a **modern web UI** and backend server stacks.

The architecture is split into **three logical layers**:

### 🔁 Communication Flow

1. **Hardware → Flask (Pi):** Sensor readings (temperature/humidity) and button states are captured on the Raspberry Pi using a Flask server.  
2. **Flask → Backend:** The Pi sends this data via WebSockets or REST to the backend.  
3. **Backend → Frontend:** The Node.js server relays data to the Vue frontend in real time, allowing interactive control and live updates.  
4. **Admin CRUD:** Admin users can manage devices and sensors through REST API calls, backed by MySQL via Prisma schema.  

---

## 📐 Summary of Components


### 🖥 Frontend (Vue.js)
- User interface for dashboards, sensor data, and hardware control.
- Realtime updates using WebSockets.
- Handles login, device/sensor CRUD (admin), and user controls (e.g., LED).

### 🧠 Backend (Node.js + Prisma + MySQL)
- Central server bridging frontend and Raspberry Pi hardware.
- Stores persistent records of devices and sensors.
- Implements REST API endpoints and WebSocket message routing.
- Prisma used as an ORM instead of raw SQL, improving flexibility and migration handling.

### 🛠 Raspberry Pi (Flask Hardware Layer)
- Python Flask application directly interfaces with GPIO and sensors.
- Sends data over WebSockets to the backend.
- Handles hardware control logic (e.g., LEDs, buttons).

---

## 🧠 Design Principles

- **Loose coupling** between UI, server logic, and hardware code.
- **Realtime feedback** using WebSockets — no page reloads required.
- **Separation of concerns** — each layer focuses on its domain:
  - Frontend for UI and UX.
  - Backend for business logic and persistence.
  - Raspberry Pi for actual IoT device interaction.

---

## 💾 Setup & Installation

### 📌 Backend
1. Clone the repo:
   ```bash
   git clone https://github.com/Elliotwhoisalsobo/IoT-webproject.git
   cd IoT-webproject/backend