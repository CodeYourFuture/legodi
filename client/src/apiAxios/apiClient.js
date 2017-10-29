import axios from 'axios';
const REACT_APP_API_URI  = process.env.API_URI || 'http://localhost:3001';

const apiClient = {
    getCategories: () => {
        return axios.get(`${REACT_APP_API_URI }/api/categories`);
    },
    getArticles: () => {
        return axios.get(`${REACT_APP_API_URI }/api/articles`);
    }
}

export default apiClient;