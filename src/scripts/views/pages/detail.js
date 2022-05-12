import RestaurantApi from '../../data/sourceAPI';
import UrlParser from '../../routes/url_parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template_creator';

const Detail = {
  async render() {
    return `
    <div id="mainContent">
      <section id="detail_restaurant">
          <h2 class="section_title" aria-label="detail restaurant" tabindex="0">
              Detail Restaurant
          </h2> 
          <div id="detailRestaurant" class="detailRestaurant">

          </div>
      </section>
      <div id="likeButtonContainer"></div>
    </div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantApi.detailResto(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        image: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
