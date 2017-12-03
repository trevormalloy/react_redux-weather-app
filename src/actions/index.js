import axios from 'axios';

const API_KEY = '7e1325a8c496a347c691ba0ad366a026';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // setting up the promise
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}