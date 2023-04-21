import './css/main.css';
import createPage from './createpage.js';
import searchWeather, { renderWeather, switchUnits } from './domfns.js';

const link = document.createElement('link');
link.rel = 'shortcut icon';
link.type = 'image/x-icon';
link.href = './images/favicon.png';
document.getElementsByTagName('head')[0].appendChild(link);
const invoke = () => {
    createPage();
    setTimeout(() => {
		switchUnits();
        searchWeather();
        renderWeather('London');
    }, 1000);
};
invoke();