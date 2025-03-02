import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const gallery = document.querySelector(".gallery");

export function renderImages(images) {
  if (images.length === 0) {
    iziToast.error({
      title: "Error",
      message: "Sorry, there are no images matching your search query. Please try again!",
    });
    return;
  }

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" class="gallery-image"/>
        </a>
        <div class="info">
          <p>❤️ ${likes}</p>
          <p>👁 ${views}</p>
          <p>💬 ${comments}</p>
          <p>⬇️ ${downloads}</p>
        </div>
      </li>`
    )
    .join("");

  gallery.innerHTML = markup;

  const lightbox = new SimpleLightbox(".gallery a");
  lightbox.refresh();
}
