import { getRequestsService } from './js/API/api-service.js';

import {
  getImageApi,
  createMarkup,
  renderElement,
} from './js/popular-recipes.js';
renderElement();

import { setLocalStorageTheme, setThemeOnClick } from './js/dark-theme.js';

import {
  extraFilterRefs,
  onFilterItemClick,
  renderAreaOptions,
} from './js/search-filter';

getRequestsService('areas').then(area => {
  renderAreaOptions(area, extraFilterRefs.areaFilter);
});

getRequestsService('ingredients').then(ingredient => {
  renderAreaOptions(ingredient, extraFilterRefs.ingredientsFilter);
});

extraFilterRefs.filtersList?.addEventListener('click', onFilterItemClick);

import './js/slider-events.js';
