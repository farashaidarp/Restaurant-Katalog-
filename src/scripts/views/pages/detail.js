import RestaurantSource from '../../data/restaurant-source.js';
import UrlParser from '../../routes/url-parser.js';
import {createDetailRestaurant} from '../templates/template-creator.js';
import inisiasiBtnLike from '../../utils/like-button-initiator.js';

const Detail = {
  async render() {
    return `
      <div class="restaurant-detail-list"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailRestaurant = document.querySelector('.restaurant-detail-list');
    detailRestaurant.innerHTML = createDetailRestaurant(restaurant);

    inisiasiBtnLike.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
