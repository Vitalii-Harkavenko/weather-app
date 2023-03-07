export default function getApi(location, units) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=632fd6bb413cdf25606b95ce9dcf7790&units=${units}`,
        {mode: 'cors'}
    )
};