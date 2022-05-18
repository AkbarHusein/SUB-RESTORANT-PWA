import API_ENDPOINT from '../globals/api_endpoint';
import removeLoader from '../utils/loadingAnimation';

class RestaurantApi {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    removeLoader();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    removeLoader();
    return responseJson.restaurant;
  }
}

export default RestaurantApi;
