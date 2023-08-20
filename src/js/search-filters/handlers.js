import getFilterRefs from './refs';
import { getRecipes } from '../API/api-recipes';
import { renderFilteredRecipes } from './markup';
import { queryParams, executeRequest } from './requests';
import { Toast } from '../utilities/sweetalert';
import debounce from 'lodash.debounce';

const onFilterItemClick = e => {
  const item = e.target.closest('.extra-filters-item');
  if (!item) return;

  const select = item.querySelector('.extra-select');
  const list = item.querySelector('.extra-options-list');

  select.classList.toggle('opened');
  list.classList.toggle('opened-list');
};

const {
  searchInput,
  selectedTime,
  selectedArea,
  selectedIngredient,
  recipeList,
  filtersList,
  resetBtn,
} = getFilterRefs();

const onResetBtnClick = async () => {
  searchInput.value = '';
  queryParams.areaQuery = '';
  queryParams.timeQuery = '';
  queryParams.ingredientQuery = '';
  queryParams.queryParam = '';

  selectedTime.textContent = 'Select';
  selectedArea.textContent = 'Select';
  selectedIngredient.textContent = 'Select';

  const data = await getRecipes();
  renderFilteredRecipes(data?.data.results);

  const items = recipeList?.querySelectorAll('.recipe-item');
  items?.forEach(item => item.classList.remove('d-none'));

  await Toast.fire({
    icon: 'question',
    title: 'Filters have been reset',
  });
};

const onSearchInput = e => {
  queryParams.searchQuery = e.target.value;
  executeRequest();
};

filtersList?.addEventListener('click', onFilterItemClick);
searchInput?.addEventListener('input', debounce(onSearchInput, 300));
resetBtn?.addEventListener('click', onResetBtnClick);

export { onFilterItemClick, onResetBtnClick, onSearchInput };
