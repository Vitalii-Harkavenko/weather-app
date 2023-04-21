export default function createPage() {

    createSection('container', document.body);
    createSection('header', document.getElementById('container'));
    createContent('h2', 'project', 'One Weather App More', document.getElementById('header'));
    createSection('main', document.getElementById('container'));
    createSection('footer', document.getElementById('container'));
    const main = document.getElementById('main');

    createSection('current-weather', main);

    createSection('main-info', document.getElementById('current-weather'));
    const mainInfo = document.getElementById('main-info');

    createContent('h1', 'location', '', mainInfo);
    createContent('p', 'description', '', mainInfo);

    createSection('temp', mainInfo);
    const temp = document.getElementById('temp');
    createContent('h2', 'temperature', '', temp);
    createContent('p', 'units-switcher', '', temp);

    createContent('img', 'weather-icon', '', mainInfo);
    createContent('input', 'search-field', '', mainInfo);
    const searchFlield = document.querySelector('.search-field');
    searchFlield.type = 'text';
    searchFlield.placeholder = 'Enter a location';
    createContent('submit', 'submit', 'Search', mainInfo);

    createSection('other-info', document.getElementById('current-weather'));

    otherInfoContent('feels-like', 'Feels like');
    otherInfoContent('temp-max', 'Max temperature')
    otherInfoContent('temp-min', 'Min temperature');
    otherInfoContent('humidity', 'Humidity');
    otherInfoContent('pressure', 'Pressure');
    otherInfoContent('wind-speed', 'Wind speed');

    createSection('weather-forecast', main);

    forecastContent('1');
    forecastContent('2');
    forecastContent('3');
    forecastContent('4');
    forecastContent('5');

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

    function otherInfoContent(elClass, title) {
        createSection(elClass, document.getElementById('other-info'));
        let el = document.getElementById(elClass);
        createContent('h3', 'title', title, el);
        createContent('p', `current-${elClass}`, '', el);
    }

    function forecastContent(day) {
        createSection(`forecast-section-day-${day}`, document.getElementById('weather-forecast'));
        let el = document.getElementById(`forecast-section-day-${day}`);
        createContent('h2', `forecast-temp-day-${day}`, '', el);
        createContent('p', `forecast-desc-day-${day}`, '', el);
        createContent('img', `forecast-icon-day-${day}`, '', el);
        createSection(`forecast-feels-like-day-${day}`, el);
        createContent('h3', 'title', 'Feels like', document.getElementById(`forecast-feels-like-day-${day}`));
        createContent('p', `forecast-feels-like-day-${day}`, '', document.getElementById(`forecast-feels-like-day-${day}`));
    };
};