import RestaurantSource from '../../data/restaurant-source.js';
import {createRestaurantMenu} from '../templates/template-creator.js';
import '../templates/components/jumbotron.js';
import '../templates/components/sponsorship.js';

const Home = {
  async render() {
    return `
      <custom-jumbotron></custom-jumbotron>
      <section class="resto" id="mainContent" >
        <h3 >Daftar Restoran</h3>
        <div class="container_restaurant"></div>
      </section>
    `;
  },

  async afterRender() {
    const conRestaurant = document.querySelector('.container_restaurant');
    const restoran = await RestaurantSource.restaurantList();
    restoran.forEach((restaurant) => {
      conRestaurant.innerHTML += createRestaurantMenu(restaurant);
    });
  },
};

export default Home;
