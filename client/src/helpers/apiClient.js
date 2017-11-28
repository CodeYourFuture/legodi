import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:3001';

 
const apiClient = {
    getCategories: () => {
             return axios.get(`${apiUrl}/api/categories`);              
     },
    getArticles: () => {
        return axios.get(`${apiUrl}/api/articles`);
    },
    getSingleArticle: (articleId) => {

        return axios.get(`${apiUrl}/api/articles/${articleId}`);
    },
    getArticlesByCategoryId: (categoryId,language) => {

        if(language=="En"){
            return axios.get(`${apiUrl}/api/categories/${categoryId}?language=En`);
            
        }else{
            return axios.get(`${apiUrl}/api/categories/${categoryId}?language=${language}`);            
        }
    }
}

export default apiClient;