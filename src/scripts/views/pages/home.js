import RestaurantApi from '../../data/sourceAPI';
import { createRestaurantItemTemplate } from '../templates/template_creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
      <img src="images/hero-image_2.jpg" alt="Hero Image" class="hero-image">
        <div class="text-hero">
          <p>Find Your Favorite Restaurant!</p>
        </div>
    </div>
    <main id="mainContent">
      <section id="explorer_restaurant" >
        <div class="container">
          <h2 class="section_title" aria-label="explorer restaurant" tabindex="0">
              Explorer Restaurant
          </h2>
          <div id="restaurant" class="restaurant"></div>
        </div>
      </section>
    </main>
    `;
  },

  async afterRender() {
    const resto = await RestaurantApi.home();
    const restaurantContainer = document.querySelector('#restaurant');

    resto.forEach((restoItem) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restoItem);
    });
  },
};

export default Home;
