import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb.js';
import {createButtonLike, createCancelLike} from '../views/templates/fraction-creator.js';

const inisiasiBtnLike = {
  async init({likeButtonContainer, restaurant}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.dataRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createButtonLike();

    const likeButton = document.querySelector('.like');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.taruhRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createCancelLike();

    const likeButton = document.querySelector('.like');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.hapusRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default inisiasiBtnLike;
