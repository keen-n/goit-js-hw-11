import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  gallery.innerHTML = ""; 
  loader.style.display = "block"; 

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    console.error("Помилка:", error);
  } finally {
    loader.style.display = "none"; 
  }
});
