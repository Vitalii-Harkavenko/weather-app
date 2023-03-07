import getApi from "./apifn";

function renderCurrentWeather(data) {
    const chosenUnits = document.querySelector('.units-switcher').innerText;
    
    document.querySelector('.location').innerText = `${data.city.name}, ${data.city.country}`;
    document.querySelector('.temperature').innerText = `${data.list[0].main.temp}${chosenUnits}`;
    document.querySelector('.description').innerText = data.list[0].weather[0].description;
    document.querySelector('.weather-icon').src = `./images/${data.list[0].weather[0].icon}.png`;
    document.querySelector('.current-humidity').innerText = data.list[0].main.humidity;
    document.querySelector('.current-pressure').innerText = data.list[0].main.pressure;
    document.querySelector('.current-feels-like').innerText = `${data.list[0].main.feels_like}${chosenUnits}`;
    document.querySelector('.current-temp-max').innerText = `${data.list[0].main.temp_max}${chosenUnits}`;
    document.querySelector('.current-temp-min').innerText = `${data.list[0].main.temp_min}${chosenUnits}`;
    if (chosenUnits === '°F') {
        document.querySelector('.current-wind-speed').innerText = `${data.list[0].wind.speed}miles/h`;
    } else {
        document.querySelector('.current-wind-speed').innerText = `${data.list[0].wind.speed}meter/sec`;
    }
};

function renderFullForecast(data) {
    renderForecast('one', 8, data);
    renderForecast('two', 16, data);
    renderForecast('three', 24, data);
    renderForecast('four', 32, data);
    renderForecast('five', 39, data);
};

function renderForecast(day, list, data) {
    const chosenUnits = document.querySelector('.units-switcher').innerText;

    document.querySelector(`.forecast-temp-day-${day}`).innerText = `${data.list[list].main.temp}${chosenUnits}`;
    document.querySelector(`.forecast-desc-day-${day}`).innerText = data.list[list].weather[0].description;
    document.querySelector(`.forecast-icon-day-${day}`).src = `./images/${data.list[list].weather[0].icon}.png`;
    document.querySelector(`.forecast-feels-like-day-${day}`).innerText = `${data.list[list].main.feels_like}${chosenUnits}`;
}

export async function renderWeather(defaultInput = '', updateUnits = false) {
    try {
        let response;
        if (defaultInput !== '') 
            response = await getApi(defaultInput, unitsValue());
        else if (updateUnits === true)
            response = await getApi(document.querySelector('.location').innerText.replace(/\s/g, ""), unitsValue());
        else
            response = await getApi(document.querySelector('.search-field').value, unitsValue());
        const weatherData = await response.json();
        renderCurrentWeather(weatherData);
        renderFullForecast(weatherData);
        document.querySelector('.search-field').value = '';
    } catch (error) {
        console.error(error);
    };
};

export default function searchWeather() {
    document.querySelector('.submit').addEventListener('click', () => {
        if (document.querySelector('.search-field').value === '') return;
        renderWeather();
    });
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

function unitsValue() {
    if (document.querySelector('.units-switcher').innerText === '°C') return 'metric';
    else return 'imperial';
};