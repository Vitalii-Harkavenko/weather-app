import getApi from "./apifn";

function renderCurrentWeather(data) {
    document.querySelector('.location').innerText = `${data.city.name}, ${data.city.country}`;
    document.querySelector('.temperature').innerText = `${data.list[0].main.temp}°C`;
    document.querySelector('.description').innerText = data.list[0].weather[0].description;
    document.querySelector('.weather-icon').src = `./images/${data.list[0].weather[0].icon}.png`;
    document.querySelector('.current-humidity').innerText = data.list[0].main.humidity;
    document.querySelector('.current-pressure').innerText = data.list[0].main.pressure;
    document.querySelector('.current-feels-like').innerText = `${data.list[0].main.feels_like}°C`;
    document.querySelector('.current-temp-max').innerText = `${data.list[0].main.temp_max}°C`;
    document.querySelector('.current-temp-min').innerText = `${data.list[0].main.temp_min}°C`;
    if (document.querySelector('.units-switcher').innerText === '°F') {
        document.querySelector('.current-wind-speed').innerText = `${data.list[0].wind.speed}miles/h`;
    } else {
        document.querySelector('.current-wind-speed').innerText = `${data.list[0].wind.speed}meter/sec`;
    }
};

function renderForecast(data) {
    document.querySelector('.forecast-temp-day-one').innerText = `${data.list[8].main.temp}°C`;
    document.querySelector('.forecast-desc-day-one').innerText = data.list[8].weather[0].description;
    document.querySelector('.forecast-icon-day-one').src = `./images/${data.list[8].weather[0].icon}.png`;
    document.querySelector('.forecast-feels-like-day-one').innerText = `${data.list[8].main.feels_like}°C`;

    document.querySelector('.forecast-temp-day-two').innerText = `${data.list[16].main.temp}°C`;
    document.querySelector('.forecast-desc-day-two').innerText = data.list[16].weather[0].description;
    document.querySelector('.forecast-icon-day-two').src = `./images/${data.list[16].weather[0].icon}.png`;
    document.querySelector('.forecast-feels-like-day-two').innerText = `${data.list[16].main.feels_like}°C`;

    document.querySelector('.forecast-temp-day-three').innerText = `${data.list[24].main.temp}°C`;
    document.querySelector('.forecast-desc-day-three').innerText = data.list[24].weather[0].description;
    document.querySelector('.forecast-icon-day-three').src = `./images/${data.list[24].weather[0].icon}.png`;
    document.querySelector('.forecast-feels-like-day-three').innerText = `${data.list[24].main.feels_like}°C`;

    document.querySelector('.forecast-temp-day-four').innerText = `${data.list[32].main.temp}°C`;
    document.querySelector('.forecast-desc-day-four').innerText = data.list[32].weather[0].description;
    document.querySelector('.forecast-icon-day-four').src = `./images/${data.list[32].weather[0].icon}.png`;
    document.querySelector('.forecast-feels-like-day-four').innerText = `${data.list[32].main.feels_like}°C`;
    
    document.querySelector('.forecast-temp-day-five').innerText = `${data.list[39].main.temp}°C`;
    document.querySelector('.forecast-desc-day-five').innerText = data.list[39].weather[0].description;
    document.querySelector('.forecast-icon-day-five').src = `./images/${data.list[39].weather[0].icon}.png`;
    document.querySelector('.forecast-feels-like-day-five').innerText = `${data.list[39].main.feels_like}°C`;
};

export async function renderWeather(defaultInput = '', updateUnits = false) {
    let unitsValue;
    if (document.querySelector('.units-switcher').innerText === '°C') {unitsValue = 'metric'};
    if (document.querySelector('.units-switcher').innerText === '°F') {unitsValue = 'imperial'};
    try {
        if (defaultInput !== '') {
            const response = await getApi(defaultInput, unitsValue);
            const weatherData = await response.json();
            renderCurrentWeather(weatherData);
            renderForecast(weatherData);
        } else if (updateUnits === true) {
            const loc = document.querySelector('.location').innerText;
            const response = await getApi(loc.replace(/\s/g, ""), unitsValue);
            const weatherData = await response.json();
            renderCurrentWeather(weatherData);
            renderForecast(weatherData);
        } else {
            const response = await getApi(document.querySelector('.search-field').value, unitsValue);   
            const weatherData = await response.json();
            renderCurrentWeather(weatherData);
            renderForecast(weatherData);
        };
        document.querySelector('.search-field').value = '';
    } catch (error) {
        console.error(error);
    }
};

export function switchUnits() {
    const units = document.querySelector('.units-switcher');
    units.innerText = '°C';
    units.addEventListener('click', () => {
        if (units.innerText === '°C') 
        units.innerText = '°F';
        else units.innerText = '°C';
        renderWeather('', true);
    })
};

export default function searchWeather() {
    document.querySelector('.submit').addEventListener('click', () => {
        if (document.querySelector('.search-field').value === '') return;
        renderWeather();
    });
};