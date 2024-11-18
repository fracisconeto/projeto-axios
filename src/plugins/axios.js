import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzliZGIwYjUxZGQ1ZWMzMTY5YjhmMzhjODI1ZTkxNSIsIm5iZiI6MTczMTkzODg0OS4yNjM2MDczLCJzdWIiOiI2NzMyNWQ1ODYxNjI2YWMxMDZiZTg3MWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ulzG24OG7OlhL8XejhY4rjLXJQ9smxFK0QAf4MX7ubc`,
  },
});

export default api;