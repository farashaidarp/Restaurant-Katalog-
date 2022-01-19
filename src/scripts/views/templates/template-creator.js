import API_ENDPOINT from '../../globals/api-endpoint.js';
import * as func from './fraction-creator.js';

const createRestaurantMenu = (restaurant) => `
  <div class="restaurant-template">
    <img src="${API_ENDPOINT.IMAGE.LARGE(restaurant.pictureId)}" alt="resataurant picture" >
    <div class="restaurant-header">
      <p class="restaurant-name" >${restaurant.name}</p>
      <p class="restaurant-kota">${restaurant.city}</p>
      <p class="restaurant-rating">${restaurant.rating}<i class="fa fa-star" aria-hidden="true"></i></p>
    </div>
    <div class="restaurant-detail" >
    <p>${restaurant.description}</p>
    </div>
    <a href="${`#/detail/${restaurant.id}`}" class="restaurant-next tombol message"><i class="fa fa-angle-double-right"></i>Lihat Detail<i class="fa fa-angle-double-left"></i></a>
  </div>
`;

const createDetailRestaurant = (restaurant) => `
  <h2 class = "judul-konten">Detail Restaurant</h2>
  <div class="container-detail">
    <img  src="${API_ENDPOINT.IMAGE.MEDIUM(restaurant.pictureId)}" alt="resataurant picture " class="image" >
    <div class="konten-restaurant">
      <h1 class="name" >${restaurant.name}</h1>
      <div class = "card">
      <h4 >Kategori : </h4>
      <p>${func.createRestaurantDetailCategories(restaurant).join(', ')}</p>
      <h4 >Rating : </h4>
      <p >${restaurant.rating}<i class="fa fa-star" aria-hidden="true"></i></p>
      <h4>Kota : </h4>
      <p class="city">${restaurant.city} </p>
      <h4 >Alamat : </h4>
      <p>${restaurant.address} </p> 
      
      </div>
      <div class="restaurant-menu card card2">
          <h4 >Makanan</h4>
          <ul> 
          ${func.createRestaurantDetailMenus(restaurant, 'foods')}
          </ul>
          <h4 class="minum" >Minuman</h4> 
          <ul>
            ${func.createRestaurantDetailMenus(restaurant, 'drinks')}
          </ul>
      </div>
    </div>
    <div class="menu-deskripsi">
      <h4 >Deskripsi</h4>
      <p >${restaurant.description}</p>
    </div>
    <div class="restaurant-review">
      <h4 >Review</h4>
      <div class="review-person">
        ${func.createRestaurantDetailReviews(restaurant)}
      </div>
    </div>
  </div>
 
  
  <div id="likeButtonContainer"></div>
`;

export {
  createRestaurantMenu,
  createDetailRestaurant,
};
