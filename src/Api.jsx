import axios from "axios"

const API_URL = 'https://inventory-strapi-data.onrender.com'

//register a new user

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/local/register`, userData)
        return response.data
        
    } catch (error) {
        console.error("Error during user registration", error)
        
    }
}

//login a user
export const fetchUser = async (userProfile) => {
    try {
        const response = await axios.post(`${API_URL}/api/users`, userProfile)
        return response.data
        
    } catch (error) {
        console.error("Error during user registration", error)
        
    }
}

export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/local/`, loginData)
        return response.data
        
    } catch (error) {
        console.error("Error during user login", error)
        
    }
}