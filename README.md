# 🌦 Weather Web Application

A full-stack weather web application that allows users to search for real-time weather information for any city. The app uses a Node.js and Express back-end to fetch data from the OpenWeatherMap API and displays it dynamically on a clean, responsive front-end.

## 🚀 Features

- Search weather by city name
- Displays temperature, feels-like temperature, humidity, wind speed, pressure, and visibility
- Real-time data fetched from OpenWeatherMap API
- Responsive UI styled with Bootstrap
- Secure API key handling using environment variables

## 🛠 Tech Stack
- Front-end: HTML, CSS, JavaScript, Bootstrap
- Back-end: Node.js, Express
- API: OpenWeatherMap API
- Other Tools: dotenv, node-fetch

##  ⚙️ Setup & Installation
1. Clone or Download the Project
Place the project folder anywhere on your computer.
2. Install Dependencies
Open a terminal in the project root and run:
npm install
3. Create a .env File
In the project root directory, create a file named .env and add:
WEATHER_API_KEY=your_openweathermap_api_key_here
You can get a free API key from https://openweathermap.org

## ▶️ Running the Application
Start the server with: node server.js

You should see: Server running at http://localhost:3000

Then open your browser and go to:
http://localhost:3000
