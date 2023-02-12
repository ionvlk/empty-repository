import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" title='${description}' />
    </a>
  `;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a',{} );

