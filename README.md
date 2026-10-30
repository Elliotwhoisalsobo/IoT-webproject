# IoT Web Controller

An IoT web dashboard for the Web Fundamentals course. It connects a Raspberry Pi
with real sensors and actuators to a web UI, with realtime updates over WebSockets.

## What it does

- **Users** can control an RGB LED (color + on/off) and play a Simon Says game using
  the physical button on the Pi.
- **Admins** get CRUD screens to manage devices and sensors.
- Sensor data (temperature/humidity from a DHT11) and button presses are pushed live
  to the frontend, no page reloads.

## Architecture

Three layers, each with its own job:

- **Frontend** (Vue 3 + Vite) — the UI. Talks to the backend over REST for CRUD and
  WebSockets for live updates.
- **Backend** (Node.js + Express + Prisma + MySQL) — the bridge. Stores devices and
  sensors, serves the REST API, and relays Pi data to the frontend.
- **Raspberry Pi** (Python + Flask) — the hardware layer. Reads the DHT11 and button
  GPIO pins, drives the LED, and forwards everything upstream.

Data flow:

```
[ Raspberry Pi / sensors ]  --WebSocket/REST-->  [ Node backend ]  --WebSocket/REST-->  [ Vue frontend ]
```

## Tech stack

- Frontend: Vue 3, Vue Router, Vite
- Backend: Node.js, Express 5, Prisma ORM, MySQL
- Hardware: Raspberry Pi, Python, Flask, DHT11, GPIO

## Setup

### Backend

```bash
cd backend
npm install
npm run start
```

The server listens on `0.0.0.0:3000`. Configure the database URL in
`backend/.env` and run the Prisma client generation if `generated/prisma` is missing:

```bash
npx prisma generate
```

### Frontend

```bash
cd frontend/my-vue-app
npm install
npm run dev
```

### Raspberry Pi

Run `raspberry-pi/pi_server.py` on the Pi. It expects the backend address configured
in the script.

### Optional: view the database

```bash
cd backend
npx prisma studio
```

## Database

Prisma schema lives at `backend/prisma/schema.prisma`. Tables:

- `device` — registered IoT devices
- `sensors` — sensors attached to a device
- `temperature_humidity` — DHT11 readings
- `led_activity` — LED on/off events
- `login` — user accounts (username/password)
