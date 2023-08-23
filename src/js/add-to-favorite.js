//ADD TO FAVORITE & SEE RECIPE
import { getRequestsService } from './API/api-service';
import axios from 'axios';
import { openModal } from './modal-recipe';
import { addToFavorites, removeFromFavorites } from './modal-recipe';

export function onListClick(e) {
  //ADD TO FAVORITES
  if (e.target.classList.contains('heart-icon')) {
    e.target.classList.remove('heart-icon');
    e.target.classList.add('added-heart-icon');
    let favoriteId = e.target.dataset.id;

    async function getInfo() {
      try {
        const recipeInfo = await getRequestsService(`recipes/${favoriteId}`);
        const existingFav = JSON.parse(localStorage.getItem('favorites')) || [];
        const isRecipeInFav = checkIfRecipeInFav(existingFav, recipeInfo._id);
        if (!isRecipeInFav) {
          addToFavorites(existingFav, recipeInfo);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();
    //REMOVE FROM FAVORITES
  } else if (e.target.classList.contains('added-heart-icon')) {
    e.target.classList.remove('added-heart-icon');
    e.target.classList.add('heart-icon');
    let favoriteId = e.target.dataset.id;

    async function getInfo() {
      try {
        const recipeInfo = await getRequestsService(`recipes/${favoriteId}`);
        const existingFav = JSON.parse(localStorage.getItem('favorites')) || [];
        const isRecipeInFav = checkIfRecipeInFav(existingFav, recipeInfo._id);
        if (isRecipeInFav) {
          removeFromFavorites(existingFav, recipeInfo._id);
        } else {
          addToFavorites(existingFav, recipeInfo);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();

    //OPEN MODAL
  } else if (e.target.classList.contains('recipe-see')) {
    let idForModal = e.target.dataset.id;
    openModal(idForModal);
  } else {
    return;
  }
}

function checkIfRecipeInFav(existingFavorites, recipeID) {
  return existingFavorites.some(favorite => favorite._id === recipeID);
}

//!!!! Нужен фикс, в слаке описал
// const elClass = e.target.classList.value;
// if (!e.target.classList.contains('js-added')) {
//   return;
// }
// if (e.target.classList.contains('added-heart-icon')) {
//   e.target.classList.remove('added-heart-icon');
//   e.target.classList.add('heart-icon');
//   let valueToRemove = e.target.id;
//   let index = favoriteArr.indexOf(valueToRemove);

//   if (index !== -1) {
//     favoriteArr.splice(index, 1);
//     console.log(favoriteArr);
//     localStorage.setItem('favoriteList', JSON.stringify(favoriteArr));
//   }
// } else {
//   e.target.classList.remove('heart-icon');
//   e.target.classList.add('added-heart-icon');
//   favoriteArr.push(e.target.id);
//   console.log(favoriteArr);
//   localStorage.setItem('favoriteList', JSON.stringify(favoriteArr));
// }
