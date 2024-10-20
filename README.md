# Weather Dashboard

The Weather Dashboard is a React-based web application that provides users with current weather conditions and a 5-day weather forecast for any city worldwide. The app allows users to manage a list of favorite cities and toggle between Celsius and Fahrenheit for temperature display.

## Features

- **Search Functionality**: Enter the name of a city to view its current weather and a 5-day forecast.
- **Temperature Toggle**: Switch between Celsius and Fahrenheit for temperature display.
- **Favorites Management**: Add cities to favorites and view their weather information easily.
- **Responsive Design**: The application is fully responsive, offering a seamless experience across devices.

## Technologies Used

- **Frontend**: React.js, Axios
- **Styling**: CSS3 (with modern design principles)
- **API**: OpenWeatherMap API
- **Backend**: JSON Server (for managing favorite cities)
- **Build Tool**: Vite

## Screenshots

![Weather Dashboard Screenshot](./public/ss.png)

## Getting Started

### Prerequisites

1. **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **API Key**: Register on [OpenWeatherMap](https://openweathermap.org/) and obtain an API key to access weather data.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard

2. **Install Dependencies**:
     
    npm install


3. **Run the Application**:
     
    npm run dev


4. **Start the JSON Server**:
     
    json-server --watch db.json --port 5000






## Obtaining an API Key from OpenWeatherMap

1. Go to [OpenWeatherMap](https://openweathermap.org/).
2. Click on the "Sign Up" button in the top right corner to create an account.
3. Once registered, log in to your account.
4. Navigate to the "API keys" section in your account settings.
5. You will see a default API key there. You can use this key for your application or generate a new one by clicking on the "Generate" button.
6. Copy the API key to use in your application.


## Setting Up API Key
Open the App.js file and replace the API_KEY variable with your own API key:
const API_KEY = "your_api_key_here";







## Usage ##
Search for a City: Type the name of a city in the search bar and press the "Search" button.
Toggle Temperature Unit: Use the toggle to switch between Celsius and Fahrenheit.
Add to Favorites: After searching, click the "Add to Favorites" button to save the city for easy access later.
View Favorite Cities: Scroll down to see your list of favorite cities and their weather details.
