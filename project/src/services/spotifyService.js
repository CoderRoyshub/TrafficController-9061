import axios from 'axios';
import { API_KEYS } from '../config/apiConfig';

export const getTrackInfo = async (trackId) => {
  try {
    const response = await axios.get(
      `${API_KEYS.SPOTIFY_ENDPOINT}/tracks/${trackId}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('spotify_token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching track:', error);
    throw error;
  }
};