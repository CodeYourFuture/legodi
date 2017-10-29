import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:3001';

const apiClient = {
    getCategories: () => {
        return axios.get(`${apiUrl}/api/categories`);
    },
    getArticles: () => {
        return axios.get(`${apiUrl}/api/articles`);
    }
}

export default apiClient;