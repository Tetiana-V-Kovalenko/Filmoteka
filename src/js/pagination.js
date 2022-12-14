import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getFilmCardsBySearch, isSubmitActiv } from './main/searching';
import { contentLoad } from './main/trending';
import { refs } from './main/refs-homepage';
import { setTheme } from './theme';

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'main-first-child',
  lastItemClassName: 'main-last-child',
  template: {
    page: '<a href="#" class="  main-page-pag-btn">{{page}}</a>',
    currentPage:
      '<strong class=" main-page-pag-btn main-page-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class=" main-page-pag-btn main-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class=" main-page-pag-btn tui-is-disabled main-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class=" main-page-pag-btn main-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination(refs.container, options);

pagination.on('afterMove', event => {
  if (isSubmitActiv === true) {
    getFilmCardsBySearch(event.page);
    setTheme();
    return;
  }
  contentLoad(event.page);
  setTheme();
});
