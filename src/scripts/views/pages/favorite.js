import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantFavotiresTemplate } from '../templates/template_creator';

const Like = {
  async render() {
    return `
    <div id="mainConetent">
      <section id="favorite_restaurant">
          <h2 class="section_title" aria-label="favorite restaurant" tabindex="0">
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
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestaurantFavotiresTemplate(resto);
    });
  },
};

export default Like;
