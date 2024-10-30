import { queryHttp } from './js/pixabay-api';
import { renderPicture } from './js/render-functions';
import { PER_PAGE } from './js/default-params';

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
refs.loadMoreBtn.addEventListener('click', onClickLoadMore);

function lightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {});
  lightbox.refresh();
}

async function onFormSubmit(evt) {
  evt.preventDefault();
  currentPage = 1;
  const form = evt.currentTarget;
  const { searchtext } = form.elements;
  query = searchtext.value.trim();

  if (query === '') {
    return fetchInfo();
  }
  refs.gallery.innerHTML = '';
  refs.loader.classList.add('isVisible');
  refs.loadMoreBtn.classList.add('is-hidden');

  try {
    const data = await queryHttp(query, currentPage);
    totalPages = Math.ceil(data.totalHits / PER_PAGE);
    if (data.hits.length === 0) {
      fetchError();
    } else {
      refs.gallery.insertAdjacentHTML('beforeend', renderPicture(data.hits));
      refs.loadMoreBtn.classList.remove('is-hidden');
      lightbox();
    }
  } catch (error) {
    fetchError();
    refs.loadMoreBtn.classList.add('is-hidden');
  } finally {
    refs.loader.classList.remove('isVisible');
    refs.searchForm.reset();
  }
}

async function onClickLoadMore() {
  currentPage += 1;
  refs.loader.classList.add('isVisible');
  refs.loadMoreBtn.classList.add('is-hidden');
  let domRect = document
    .querySelector('.gallery-card')
    .getBoundingClientRect().height;
  try {
    const data = await queryHttp(query, currentPage);
    refs.gallery.insertAdjacentHTML('beforeend', renderPicture(data.hits));
    lightbox();
    if (currentPage >= totalPages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      fetchWarning();
    } else {
      refs.loadMoreBtn.classList.remove('is-hidden');
    }
    window.scrollBy({
      top: Math.ceil(domRect * 2),
      behavior: 'smooth',
    });
  } catch (error) {
    fetchError();
  } finally {
    refs.loader.classList.remove('isVisible');
  }
}

function fetchError() {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 2000,
  });
  refs.loadMoreBtn.classList.add('is-hidden');
}

function fetchWarning() {
  iziToast.warning({
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
    timeout: 2000,
  });
  refs.loadMoreBtn.classList.add('is-hidden');
}

function fetchInfo() {
  iziToast.info({
    message: 'Search query cannot be empty. Please enter a search term.',
    position: 'topRight',
    timeout: 2000,
  });
  refs.loadMoreBtn.classList.add('is-hidden');
}
