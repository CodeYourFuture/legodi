import axios from 'axios';
const apiUrl = process.env.API_URI || 'http://localhost:3000';

const apiClient = {
    getArticles: () => {
        return axios.get(`${apiUrl}/api/articles`);
    }
}

export default apiClient;