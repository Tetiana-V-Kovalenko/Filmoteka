import { refs } from './refs-library';

import { appendCardMarkupLibrary } from './append-card-markup-library';
import { getWatched } from '../local-storage/init-form';
import { MovieAPI } from '../movie-API';

const movieApi = new MovieAPI();

// const STORAGE_WATCHED = 'watched-state';

export async function onWatchedClick() {
  refs.library_empty.classList.remove('library_empty', 'queue_empty');
  refs.gallery_library.innerHTML = '';
  refs.libraryWatched.classList.add('header-library__btn-active');
  refs.libraryQueue.classList.remove('header-library__btn-active');

  refs.spinner.classList.remove('hidden');
  const arrSelectedWatched = getWatched();
  if (arrSelectedWatched.length === 0) {
    refs.library_empty.classList.add('watched_empty');
  }
  const arrFetchPromises = arrSelectedWatched.map(el =>
    movieApi.getMovieById(el)
  );

  const responseOfFetchPromises = await Promise.all(arrFetchPromises);

  appendCardMarkupLibrary(responseOfFetchPromises);
  refs.spinner.classList.add('hidden');
}
