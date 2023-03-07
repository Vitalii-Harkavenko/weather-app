import './styles.css';
import createPage from './createpage.js';
import searchWeather, { renderWeather, switchUnits } from './domfns.js';

createPage();
switchUnits();
searchWeather();
renderWeather('London');