import axios from 'axios';
const apiUrl = process.env.API_URI || 'http://localhost:3001';

const apiClient = {
    getCategories: () => {
        return axios.get(`${apiUrl}/api/articles`);
    }
}

export default apiClient;