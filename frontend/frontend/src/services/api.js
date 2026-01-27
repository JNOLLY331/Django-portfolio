import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": 'application/json'
    }
});


export const portfolioAPI = {
    // profile
    getProfile: () => api.get('/profiles/main/'),
    
    // skills
    getSkills: () => api.get('/skills/'),
    getSkillsByCategory: () => api.get('/skills/by_category/'),
    
    // projects
    getProjects: () => api.get('/projects/'),
    getFeaturedProjects: () => api.get('/projects/featured/'),
    
    // Experience (Fixed spelling of 'Expirience' in the key, 
    // but kept the URL as is to match your likely Django path)
    getExpirience: () => api.get('/expiriences/'),
    
    // contact
    sendMessage: (data) => api.post('/contacts/', data)
};

export default api;