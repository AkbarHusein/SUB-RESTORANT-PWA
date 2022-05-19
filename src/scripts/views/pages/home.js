import RestaurantApi from '../../data/sourceAPI';
import Toast from '../../utils/notification';
import { createRestaurantItemTemplate } from '../templates/template_creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
      <picture>
        <source media="(max-width: 720px)" srcset="./images/hero-image-small.jpg" sizes="">
        <img src="./images/hero-image-large.jpg" alt="Hero Image" class="hero-image">
      </picture>
        <div class="text-hero">
          <p>Find Your Favorite Restaurant!</p>
        </div>
    </div>
    <main id="mainContent"  aria-label="explorer restaurant" tabindex="0">
      <section id="explorer_restaurant" >
        <div class="container">
          <h2 class="section_title">
              Explorer Restaurant
          </h2>

            <div class="loader lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <div id="restaurant" class="restaurant"></div>
        </div>
      </section>
    </main>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant');

    try {
      const resto = await RestaurantApi.home();
      resto.forEach((restoItem) => {
        restaurantContainer.innerHTML +=
          createRestaurantItemTemplate(restoItem);
      });
    } catch (error) {
      Toast.fire({
        icon: 'warning',
        title:
          'Anda sedang offline, beberapa konten mungkin tidak akan tampil.',
      });
    }
  },
};

export default Home;
