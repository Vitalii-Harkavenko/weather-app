export default function createPage() {

    createSection('container', document.body);
    createSection('header', document.getElementById('container'));
    createSection('main', document.getElementById('container'));
    createSection('footer', document.getElementById('container'));
    const main = document.getElementById('main');

    createSection('current-weather', main);

    createSection('main-info', document.getElementById('current-weather'));
    const mainInfo = document.getElementById('main-info');

    createContent('p', 'location', '', mainInfo);
    createContent('p', 'description', '', mainInfo);

    createSection('temp', mainInfo);
    const temp = document.getElementById('temp');
    createContent('p', 'temperature', '', temp);
    createContent('p', 'units-switcher', '', temp);

    createContent('img', 'weather-icon', '', mainInfo);
    createContent('input', 'search-field', '', mainInfo);
    createContent('submit', 'submit', 'search', mainInfo);

    createSection('other-info', document.getElementById('current-weather'));
    const otherInfo = document.getElementById('other-info');

    createSection('feels-like', otherInfo);
    const feelsLike = document.getElementById('feels-like');
    createContent('p', 'title', 'Feels like', feelsLike);
    createContent('p', 'current-feels-like', '', feelsLike);

    createSection('temp-max', otherInfo);
    const tempMax = document.getElementById('temp-max');
    createContent('p', 'title', 'Max temperature', tempMax);
    createContent('p', 'current-temp-max', '', tempMax);

    createSection('temp-min', otherInfo);
    const tempMin = document.getElementById('temp-min');
    createContent('p', 'title', 'Min temperature', tempMin);
    createContent('p', 'current-temp-min', '', tempMin);

    createSection('humidity', otherInfo);
    const humidity = document.getElementById('humidity');
    createContent('p', 'title', 'Humidity', humidity);
    createContent('p', 'current-humidity', '', humidity);

    createSection('pressure', otherInfo);
    const pressure = document.getElementById('pressure');
    createContent('p', 'title', 'Pressure', pressure);
    createContent('p', 'current-pressure', '', pressure);

    createSection('wind-speed', otherInfo);
    const windSpeed = document.getElementById('wind-speed');
    createContent('p', 'title', 'Wind speed', windSpeed);
    createContent('p', 'current-wind-speed', '', windSpeed);

    createSection('weather-forecast', main);
    const weatherForecast = document.getElementById('weather-forecast');

    createSection('forecast-section-day-one', weatherForecast);
    const forecastDayOne = document.getElementById('forecast-section-day-one');
    createContent('p', 'forecast-temp-day-one', '', forecastDayOne);
    createContent('p', 'forecast-desc-day-one', '', forecastDayOne);
    createContent('img', 'forecast-icon-day-one', '', forecastDayOne);
    createSection('forecast-feels-like-day-one', forecastDayOne);
    const feelsLikeDayOne = document.getElementById('forecast-feels-like-day-one');
    createContent('p', 'title', 'Feels like', feelsLikeDayOne);
    createContent('p', 'forecast-feels-like-day-one', '', feelsLikeDayOne);


    createSection('forecast-section-day-two', weatherForecast);
    const forecastDayTwo = document.getElementById('forecast-section-day-two');
    createContent('p', 'forecast-temp-day-two', '', forecastDayTwo);
    createContent('p', 'forecast-desc-day-two', '', forecastDayTwo);
    createContent('img', 'forecast-icon-day-two', '', forecastDayTwo);
    createSection('forecast-feels-like-day-two', forecastDayTwo);
    const feelsLikeDayTwo = document.getElementById('forecast-feels-like-day-two');
    createContent('p', 'title', 'Feels like', feelsLikeDayTwo);
    createContent('p', 'forecast-feels-like-day-two', '', feelsLikeDayTwo);
    
    createSection('forecast-section-day-three', weatherForecast);
    const forecastDayThree = document.getElementById('forecast-section-day-three');
    createContent('p', 'forecast-temp-day-three', '', forecastDayThree);
    createContent('p', 'forecast-desc-day-three', '', forecastDayThree);
    createContent('img', 'forecast-icon-day-three', '', forecastDayThree);
    createSection('forecast-feels-like-day-three', forecastDayThree);
    const feelsLikeDayThree = document.getElementById('forecast-feels-like-day-three');
    createContent('p', 'title', 'Feels like', feelsLikeDayThree);
    createContent('p', 'forecast-feels-like-day-three', '', feelsLikeDayThree);

    createSection('forecast-section-day-four', weatherForecast);
    const forecastDayFour = document.getElementById('forecast-section-day-four');
    createContent('p', 'forecast-temp-day-four', '', forecastDayFour);
    createContent('p', 'forecast-desc-day-four', '', forecastDayFour);
    createContent('img', 'forecast-icon-day-four', '', forecastDayFour);
    createSection('forecast-feels-like-day-four', forecastDayFour);
    const feelsLikeDayFour = document.getElementById('forecast-feels-like-day-four');
    createContent('p', 'title', 'Feels like', feelsLikeDayFour);
    createContent('p', 'forecast-feels-like-day-four', '', feelsLikeDayFour);
    
    createSection('forecast-section-day-five', weatherForecast);
    const forecastDayFive = document.getElementById('forecast-section-day-five');
    createContent('p', 'forecast-temp-day-five', '', forecastDayFive);
    createContent('p', 'forecast-desc-day-five', '', forecastDayFive);
    createContent('img', 'forecast-icon-day-five', '', forecastDayFive);
    createSection('forecast-feels-like-day-five', forecastDayFive);
    const feelsLikeDayFive = document.getElementById('forecast-feels-like-day-five');
    createContent('p', 'title', 'Feels like', feelsLikeDayFive);
    createContent('p', 'forecast-feels-like-day-five', '', feelsLikeDayFive);

    function createContent(type, class_Name, text, parent) {
        let el = document.createElement(type);
        el.className = class_Name;
        el.innerText = text;
        parent.append(el);
    };

    function createSection(id, parent) {
        let el = document.createElement('div');
        el.id = id;
        parent.append(el);
    };
};