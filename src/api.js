// api.js
import axios from "axios";
// Replace with the actual API endpoint URL
const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

// Fetch data from the API
export const fetchDataFromApi = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};

// api.js
// import axios from 'axios';

// const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

// Fetch data from the API
export const fetchKanbanData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Assuming the API response data is the array of cards
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
