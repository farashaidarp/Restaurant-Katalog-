import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import {createRestaurantMenu} from '../templates/template-creator.js';

const Favorite = {
  async render() {
    return `
    <section class="resto" id="mainContent" >
      <h3 >Restoran yang Disukai</h3>
      <div class="container_restaurant"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.container_restaurant');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantMenu(restaurant);
    });
  },
};

export default Favorite;
