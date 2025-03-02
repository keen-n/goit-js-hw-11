import axios from "axios";

const API_KEY = "49129723-e1a4448186c17e12c6eff5cb4"; 
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
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
    return response.data.hits;
  } catch (error) {
    iziToast.error({
  title: "Error",
  message: "Sorry, there was an error fetching images. Please try again!",
  position: "topRight",
});
return [];
  }
}
