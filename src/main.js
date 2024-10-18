import { queryHttp } from './js/pixabay-api';
import { renderPicture } from './js/render-functions';
import { PAGE, PER_PAGE } from './js/default-params';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-loader-more-btn'),
};

let currentPage = 1;
let query = '';
let totalPages = 0;

refs.searchForm.addEventListener('submit', onFormSubmit);
async function onFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const { searchtext } = form.elements;

  query = searchtext.value.trim();
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
  refs.loadMoreBtn.classList.add('is-hidden');

  try {
    const data = await queryHttp(query, currentPage);
    totalPages = Math.ceil(totalPages / PER_PAGE);
    if (data.hits.length === 0) {
      fetchError();
    } else {
      refs.gallery.insertAdjacentHTML('beforeend', renderPicture(data.hits));
      refs.loadMoreBtn.classList.remove('is-hidden');
      const lightbox = new SimpleLightbox('.gallery a', {});
    }
  } catch (error) {
    fetchError(error);
    refs.loadMoreBtn.classList.add('is-hidden');
  } finally {
    refs.loader.classList.remove('isVisible');
    refs.searchForm.reset();
  }
}
refs.loadMoreBtn.addEventListener('click', onClickLoadMore);

function onClickLoadMore() {
  currentPage += 1;
  refs.loader.classList.add('isVisible');
  refs.loadMoreBtn.classList.add('is-hidden');
  try {
    queryHttp(query, currentPage);
    refs.gallery.insertAdjacentHTML('beforeend', renderPicture(data.hits));
    const lightbox = new SimpleLightbox('.gallery a', {});
    lightbox.refresh();
    if (currentPage >= totalPages) {
      refs.loadMoreBtn.classList.add('is-hidden');
    } else {
      refs.loadMoreBtn.classList.remove('is-hidden');
    }
  } catch (error) {
    fetchError(error);
  } finally {
    refs.loader.classList.remove('isVisible');
  }
}

function fetchError() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
  refs.loadMoreBtn.classList.add('is-hidden');
}
