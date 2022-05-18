import RestaurantApi from '../../data/sourceAPI';
import UrlParser from '../../routes/url_parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import Toast from '../../utils/notification';
import { createRestaurantDetailTemplate } from '../templates/template_creator';

const Detail = {
  async render() {
    return `
    <div id="mainContent">
      <section id="detail_restaurant" aria-label="detail restaurant" tabindex="0">
          <h2 class="section_title">
              Detail Restaurant
          </h2> 
          <div id="detailRestaurant" class="detailRestaurant">

            <div class="loader lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>

          </div>
      </section>
      <div id="likeButtonContainer"></div>
    </div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#detailRestaurant');

    try {
      const resto = await RestaurantApi.detailResto(url.id);
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
    } catch (error) {
      Toast.fire({
        icon: 'warning',
        title:
          'Anda sedang offline, beberapa content mungkin tidak akan tampil.',
      });
    }
  },
};

export default Detail;
