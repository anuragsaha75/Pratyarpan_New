import axios from 'axios';




// GET MEMBERS
export async function getMembers(): Promise<any[]> {
  try {
    const response = await axios.get(`${API_URL}/members`);
    return response.data;
  } catch (error) {
    const err = error as any;
    console.error("Failed to fetch members:", err.response?.data || err.message);
    throw error;
  }
}

// DONATE function
export async function donate(donationData: any): Promise<any> {
  try {
    const response = await axios.post(`${API_URL}/donate`, donationData);
    return response.data;
  } catch (error) {
    const err = error as any;
    console.error("Donation failed:", err.response?.data || err.message);
    throw error;
  }
}

// GET GALLERY ITEMS
export async function getGalleryItems(): Promise<any[]> {
  try {
    const response = await axios.get(`${API_URL}/gallery`);
    return response.data;
  } catch (error) {
    const err = error as any;
    console.error("Failed to fetch gallery items:", err.response?.data || err.message);
    throw error;
  }
}

// Replace this with your actual backend API URL
const API_URL = 'http://localhost:5000/api';

// REGISTER user
export async function registerUser(userData: any): Promise<any> {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    const err = error as any;
    console.error("Registration failed:", err.response?.data || err.message);
    throw error;
  }
}

// LOGIN user
export async function loginUser(credentials: any): Promise<any> {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    const err = error as any;
    console.error("Login failed:", err.response?.data || err.message);
    throw error;
  }
}

// GET user profile
export async function getUserProfile(token: string): Promise<any> {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    const err = error as any;
    console.error("Fetching profile failed:", err.response?.data || err.message);
    throw error;
  }
}
