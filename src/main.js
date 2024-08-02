import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { requestsData } from './js/pixabay-api.js';
import { galleryShow } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myForm = document.querySelector('#myForm');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

myForm.addEventListener('submit', e => {
  e.preventDefault();
  let inputData = e.target.elements.search.value.trim();

  if (inputData === '') {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }



loader.style.display = 'inline-block';
  requestsData(inputData)
    .then(data => {

      galleryShow(data.hits, galleryList);
      e.target.elements.search.value = '';

      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});
