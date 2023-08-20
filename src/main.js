//? Popular recipes
import { renderElement } from './js/popular-recipes.js';
renderElement();

//? Theme switch
import { setLocalStorageTheme, setThemeOnClick } from './js/dark-theme.js';

//? Slider
import './js/slider-events.js';

//? Header
import './js/header.js';

//? Recipes list
import { renderRecipes } from './js/recipes-render';

updatePageButtons();
//? Recipes modal
import './js/modal-recipe';

//? Search filters
import './js/search-filters/handlers.js';
import './js/search-filters/filters.js';

//? Favorites
import { favorites } from './js/favorites.js';
favorites();

//? Categories
import './js/categories.js';

import './js/scrollup-btn.js';