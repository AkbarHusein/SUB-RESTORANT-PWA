import CONFIG from '../../globals/config';
import { templateListData, templateListDataReviews } from './functions';

const createRestaurantDetailTemplate = (resto) => `
    <div class="restaurant-item">
        <div class="inner_content" aria-label="restaurant ${resto.name} ${
  resto.city
} rating ${resto.rating}" tabindex="0">
            <div class="image_content">
                <div class="label_city">
                    <p><i class='bx bxs-city'></i>${resto.city}</p>
                </div>
                <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${
  resto.name
}">
                <div class="inner-text">
                    <div class="label-rating">
                        <p>Rating <span>⭐️</span>${resto.rating}</p>
                    </div>
                    <div class="label-name innerText_image">
                        <p>${resto.name}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="information">
            <div class="inner_information">
                <div class="label-address">
                    <p aria-label="${resto.address}" tabindex="0">${
  resto.address
}</p>
                </div>
                <div class="accordion-wrapper">
                    <div class="accordion-menu-makanan"tabindex="0" >
                        <button class="accordion" tabindex="-1">Menu Makanan</button>
                        <ul class="panel">
                            ${templateListData(resto.menus.foods)}
                        </ul>
                    </div>
                    <div class="accordion-menu-minuman" tabindex="0">
                        <button class="accordion" tabindex="-1">Menu Minuman</button>
                        <ul class="panel">
                            ${templateListData(resto.menus.drinks)}
                        </ul>
                    </div>
                </div>
                <div class="description" aria-label="deskripsi" tabindex="0">
                    <p>Deskripsi</p>
                    <p tabindex="0">${resto.description}</p>
                </div>
            </div>
        </div>
        <div class="customer-reviews">
            <div class="review-wrapper">
                <p>Reviews</p>
                <ul class="reviews">
                    ${templateListDataReviews(resto.customerReviews)}
                </ul>
            </div>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (resto) => `
     <div class="restaurant-item" aria-label="restaurant ${resto.name} ${
  resto.city
} rating ${resto.rating}" tabindex="0">
        <div class="image_content">
            <div class="label_city" >
                <p >${resto.city}</p>
            </div>
            <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${
  resto.name
}" class="image">
            <div class="label-rating">
                <span>⭐️</span>${resto.rating}
            </div>
        </div>
        <div class="information">
            <div class="label-name">
                <a href="${`/#/detail/${resto.id}`}">${resto.name}</a>
            </div>
            <div class="description">
                <p>${resto.description}</p>
            </div>
        </div>
    </div>
`;

const createRestaurantFavotiresTemplate = (resto) => `
    <div class="favoriteItem" aria-label="restaurant ${resto.name} ${
  resto.city
} rating ${resto.rating}" tabindex="0">
        <div class="image_content">
            <div class="label-city">
                <p>${resto.city}</p>
            </div>
            <img src="${CONFIG.BASE_IMAGE_URL + resto.image}" alt="${
  resto.name
} "class="image">
            <div class="inner-text">
                <div class="label-rating">
                    <span>⭐️</span>${resto.rating}
                </div>
                <div class="label-name">
                    <a href="${`/#/detail/${resto.id}`}">${resto.name}</a>
                </div>
            </div>
        </div>
    </div>`;

const createEmptyDataTemplate = () =>
  `<img src="images/Waiters-pana.png" class="empty-image" alt="Belum ada restaurant favorite" aria-label="Belum ada restaurant favorite" tabindex="0">
    <h3>Kamu belum mempunyai restaurant favorite</h3>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createEmptyDataTemplate,
  createLikedButtonTemplate,
  createRestaurantFavotiresTemplate,
};
