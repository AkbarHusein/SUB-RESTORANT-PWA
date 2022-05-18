import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {
  createRestaurantFavotiresTemplate,
  createEmptyDataTemplate,
} from '../templates/template_creator';

const Like = {
  async render() {
    return `
    <div id="mainConetent"  aria-label="favorite restaurant" tabindex="0">
      <section id="favorite_restaurant">
          <h2 class="section_title">
              Favorite Restaurant
          </h2>
            <div id="favoriteRestaurant" class="favoriteRestaurant">

            </div>
      </section>
    </div>`;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('#favoriteRestaurant');
    if (restos.length !== 0) {
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestaurantFavotiresTemplate(resto);
      });
    } else {
      restoContainer.classList.add('empty');
      restoContainer.innerHTML += createEmptyDataTemplate();
    }
  },
};

export default Like;
