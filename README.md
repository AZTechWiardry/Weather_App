# Weather App

A simple weather application built with HTML, CSS, and JavaScript that fetches weather data from the OpenWeatherMap API. This app allows users to search for the current weather of any city and displays temperature, humidity, wind speed, and weather conditions.

---

## Features

- Responsive design with a visually appealing interface.
- Displays:
  - Current temperature.
  - Weather condition icon.
  - Humidity level.
  - Wind speed.
- Error message for invalid city names.
- Fetches live weather data from the OpenWeatherMap API.

---

## Project Structure

```
.
├── index.html        # Main HTML structure of the app
├── style.css         # CSS for styling the app
├── script.js         # JavaScript logic for fetching and displaying weather data
├── IMAGES/           # Folder containing images for icons and background
└── README.md         # Documentation for the project
```

---

## Prerequisites

- A web browser to view the app.
- Internet connection to fetch weather data from the API.

---

## Getting Started

1. Clone the repository or download the source code.
2. Make sure all files are in the same directory structure as mentioned above.
3. Open `index.html` in any modern browser to run the app.

---

## Usage

1. Enter the name of a city in the input field.
2. Click the search button.
3. Weather details for the entered city will be displayed if found.
4. If the city name is invalid, an error message will be shown.

---

## Configuration

This app uses the OpenWeatherMap API. To make it work, ensure:

1. You have a valid API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Replace the value of the `apikey` variable in `script.js` with your API key:
   ```javascript
   const apikey = "your_api_key_here";
   ```

---

## Images and Assets

- The `IMAGES` folder contains icons for weather conditions like clouds, rain, and clear sky.
- Update the `IMAGES` folder if you want to use custom icons or backgrounds.

---

## Known Issues

- Ensure city names are spelled correctly to fetch accurate results.
- The app currently doesn't support geolocation-based weather fetching.

---

## Credits

- Weather data provided by [OpenWeatherMap]
- Made with ❤️ by **AA Brothers**.
- **Aditya Zingade**SSS 
- **Aditya Patil**

---
