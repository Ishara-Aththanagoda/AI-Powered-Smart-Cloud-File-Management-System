// api.js for making API calls to the Django backend
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Change to your backend URL

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
