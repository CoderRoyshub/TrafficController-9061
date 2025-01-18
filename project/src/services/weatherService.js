import axios from 'axios';
import { API_KEYS } from '../config/apiConfig';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS.WEATHER}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};