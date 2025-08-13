import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

export function createGallery(images) {
  const markup = images
    .map(
      (img) => `
    <li>
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
        <p>Likes: ${img.likes} | Views: ${img.views} | Comments: ${img.comments} | Downloads: ${img.downloads}</p>
      </a>
    </li>`
    )
    .join("");
  galleryContainer.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("visible");
}

export function hideLoader() {
  loader.classList.remove("visible");
}
