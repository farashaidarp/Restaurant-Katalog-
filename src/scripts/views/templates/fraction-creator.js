
const createRestaurantDetailCategories = (restaurant) => {
  const dataArray = [];
  restaurant.categories.forEach((data) => {
    dataArray.push(data.name);
  });
  return dataArray;
};

const createRestaurantDetailMenus = (restaurant, menu) => {
  const data = restaurant.menus;
  let result = '';
  switch (menu) {
    case 'foods':
      const dataFoods = data.foods;
      dataFoods.forEach((food) => {
        result += `<li  class= "men"><i class="fa fa-angle-double-right"></i>${food.name}</li>`;
      });
      break;
    case 'drinks':
      const dataDrinks = data.drinks;
      dataDrinks.forEach((drink) => {
        result += `<li  class= "men"><i class="fa fa-angle-double-right"></i>${drink.name}</li>`;
      });
      break;
    default:
      return;
  }
  return result;
};

const createRestaurantDetailReviews = (restaurant) => {
  const data = restaurant.customerReviews;
  let result = '';
  data.forEach((personReview) => {
    result += `
      <div class="review-template">
      <p> ${personReview.name}, ${personReview.date}</p>
        <h3 >${personReview.review}</h3>
       
      </div>
    `;
  });
  return result;
};

const createRestaurantDetailForm = () => {
  return `
    <form method="POST" id="formReview">
      <label for="nameInput">Name</label>
      <input type="text" id="nameInput" name="nameInput" placeholder="Input Nama" aria-label="Masukkan nama anda" required>
      <label for="reviewInput">Review</label>
      <textarea name="reviewInput" id="reviewInput" rows="5" placeholder="Input Review" aria-label="Masukkan review anda" required></textarea>
      <button type="submit" id="submitReview">Kirim Review</button>
    </form>
  `;
};

const createButtonLike = () => `
  <button aria-label="Sukai Restoran Ini" class="like">
    <i class="fa fa-plus" aria-hidden="true"></i>
  </button>
`;

const createCancelLike = () => `
  <button aria-label="Tidak Sukai Restoran Ini" class="like">
    <i class="fa fa-times" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailCategories,
  createRestaurantDetailMenus,
  createRestaurantDetailReviews,
  createRestaurantDetailForm,
  createButtonLike,
  createCancelLike,
};
