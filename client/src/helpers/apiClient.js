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
    getArticlesByCategoryId: (categoryId, language) => {

        if (language == undefined) {
            return axios.get(`${apiUrl}/api/categories/${categoryId}?language=En`);

        } else {
            return axios.get(`${apiUrl}/api/categories/${categoryId}?language=${language}`);
        }
    },
    getWeegie: () => {
        return axios.get(`${apiUrl}/api/weegie`);
    },
    postWeegie: (answer) => {
        return axios.post(`${apiUrl}/api/weegie/user/answer`,answer);
    },
    postArticle: (article, file) => {
        const config = {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': 'multipart/form-data',
            }
        }

        let data = new FormData();
        data.append('article', JSON.stringify(article))

        if (file) {
            data.append('image', file);
        }
        return axios.post(`${apiUrl}/api/addArticle`, data, config)
    }
}



export default apiClient;