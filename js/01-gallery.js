// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryRef = document.querySelector(".gallery");

const createGalleryItems = galleryItems.map((item) => 
    `<div class="gallery__item">
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');

galleryRef.insertAdjacentHTML("beforeend", createGalleryItems);



const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
// Change code below this line

console.log(galleryItems);
