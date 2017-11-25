import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:3001';

const apiClient = {
    getCategories: () => {
        let language=localStorage.getItem("language")
        if(language='En'){
            return axios.get(`${apiUrl}/api/categories`);            
         }
        return axios.get(`${apiUrl}/api/categories?language=${language}`);
    },
    getArticles: () => {
        return axios.get(`${apiUrl}/api/articles`);
    },
    getSingleArticle: (articleId) => {

        return axios.get(`${apiUrl}/api/articles/${articleId}`);
    },
    getArticlesByCategoryId: (categoryId) => {

        return axios.get(`${apiUrl}/api/categories/${categoryId}`);
    }
}

export default apiClient;