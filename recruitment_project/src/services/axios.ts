import axios from 'axios';

const API_BASE_URL = 'https://api.stackexchange.com/2.3';

export const fetchTags = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tags?order=desc&sort=popular&site=stackoverflow`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};