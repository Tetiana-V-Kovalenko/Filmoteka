import { contentLoad } from './trending';
import { onFormSubmit } from './searching';
import { refs } from './refs-homepage';
import { inputTogleEl, onInputClick } from '../theme';

document.addEventListener('DOMContentLoaded', () => {
  contentLoad(1);
});
refs.searchForm.addEventListener('submit', onFormSubmit);
inputTogleEl.addEventListener('change', onInputClick);
