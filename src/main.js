import { queryHttp } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderPicture } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.js-loader'),
};

refs.searchForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const { searchtext } = form.elements;

  const query = searchtext.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Warning',
      message: 'Search query cannot be empty. Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  refs.gallery.innerHTML = '';
  refs.loader.classList.add('isVisible');

  queryHttp(query)
    .then(data => {
      if (data.hits.length === 0) {
        fetchError();
      } else {
        refs.gallery.insertAdjacentHTML('beforeend', renderPicture(data.hits));
        const lightbox = new SimpleLightbox('.gallery a', {});
      }
    })
    .catch(error => {
      fetchError(error);
    })
    .finally(() => {
      refs.loader.classList.remove('isVisible');
      refs.searchForm.reset();
    });
}
