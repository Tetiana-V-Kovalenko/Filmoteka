import { contentLoad } from './trends';
import { onFormSubmit } from './search';
import { refs } from '../local-storage/refs-homepage';
import { inputTogleEl } from '../theme';
import { onInputClick } from '../theme';

document.addEventListener('DOMContentLoaded', () => {
  contentLoad(1);
});
refs.searchForm.addEventListener('submit', onFormSubmit);
inputTogleEl.addEventListener('change', onInputClick);
