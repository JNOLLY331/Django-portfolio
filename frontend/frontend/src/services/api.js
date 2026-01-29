import axios from 'axios';

// 1. Determine the environment
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

// 2. Set the URL dynamically
const API_BASE_URL = isLocal 
    ? "http://127.0.0.1:8000/api" 
    : "https://japhethanold.onrender.com/api";

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
    
    // Experience   
    getExpirience: () => api.get('/expiriences/'),
    
    // contact
    sendMessage: (data) => api.post('/contacts/', data)
};

export default api;