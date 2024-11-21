import axios from "axios";

export const fetchHomeData = async () => {
  try {
    const response = await axios.get("http://localhost:5001/");
    return response.data; // This should return "Welcome to the Home Page!"
  } catch (error) {
    console.error("Error fetching home data:", error);
    return "Error loading Home Page.";
  }
};
