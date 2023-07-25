const axios = require('axios');

/**
 * AxiosInstance: Creates a pre-configured axios instance for the PokeAPI.
 *
 * The baseURL is set to the PokeAPI endpoint for easier usage throughout the application.
 * Timeouts, error handling, and other configurations can be set here to ensure safer, secure, 
 * and faster HTTP requests.
 * 
 */

const axiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 5000,  // Setting a timeout of 5 seconds for each request. This ensures requests don't hang indefinitely.
    headers: {
        'Accept': 'application/json',  // Always accept JSON response.
        'Content-Type': 'application/json'  // Always send data as JSON.
    }
});

// Handle response errors globally.
axiosInstance.interceptors.response.use(
    response => response, 
    error => {
        console.error('Error with the HTTP request:', error.message);
        return Promise.reject(error);
    }
);

module.exports = axiosInstance;