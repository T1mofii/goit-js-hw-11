import axios from "axios";

const API_KEY = "51772163-3de497f859106760c35bf95d8"
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data; // повертаємо властивість data
  } catch (error) {
    console.error(error);
    throw error;
  }
}
