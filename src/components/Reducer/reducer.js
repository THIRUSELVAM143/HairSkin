// store.js
import product1 from '../images/1 57.png';
import product2 from '../images/1 57.png';
import product3 from '../images/1 58.png';
import product4 from '../images/1 59.png';
import product6 from '../images/1 50.png';
import product7 from '../images/1 37.png';
import product8 from '../images/1 38.png';
import product9 from '../images/1 39.png';
import product11 from '../images/1 40.png';
import product12 from '../images/1 41.png';
import product13 from '../images/1 42.png';
import product14 from '../images/1 43.png';
import product16 from '../images/1 48.png';
import product17 from '../images/1 49.png';
import product18 from '../images/1 50.png';
// import product19 from '../images/1 51.png';






const initialState = {
  products: [
    { id: 1, image: product1, content: 'Half Running Set', price: 119.00, offer: -30 },
    { id: 2, image: product2, content: 'Half Running Set', price: 119.00, offer: -20 },
    { id: 3, image: product3, content: 'Half Running Set', price: 119.00, offer: -40 },
    { id: 4, image: product4, content: 'Half Running Set', price: 119.00, offer: -90 },
    { id: 5, image: product4, content: 'Half Running Set', price: 119.00, offer: -90 },
    { id: 6, image: product4, content: 'Half Running Set', price: 119.00, offer: -90 },
    { id: 7, image: product4, content: 'Half Running Set', price: 119.00, offer: -90 },
    { id: 8, image: product4, content: 'Half Running Set', price: 119.00, offer: -90 },
    { id: 9, image: product4, content: 'Half Running Set', price: 119.00, offer: -90 },
  ],
  additionalProducts: [
    { id: 6, image: product6, title: 'Half Running Set', price: 119, offer: -90 },
    { id: 7, image: product7, title: 'Half Running Set', price: 119, offer: -90 },
    { id: 8, image: product8, title: 'Half Running Set', price: 119, offer: -90 },
    { id: 9, image: product9, title: 'Half Running Set', price: 119, offer: -90 },
    { id: 10, image: product9, title: 'Half Running Set', price: 119, offer: -90 },
  ],
  periodcare: [
    { id: 11, image: product11, title: 'Half Running Set', price: 119, offer: -90, sizes: ['S', 'M', 'L'], content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', quantity: 2 },
    { id: 12, image: product12, title: 'Half Running Set', price: 119, offer: -90, sizes: ['M', 'XL'], content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', quantity: 3 },
    { id: 13, image: product13, title: 'Half Running Set', price: 119, offer: -90, sizes: ['L', 'XXL'], content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', quantity: 5 },
    { id: 14, image: product14, title: 'Half Running Set', price: 119, offer: -90, sizes: ['S', 'M', 'XL'], content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', quantity: 1 },
    { id: 15, image: product14, title: 'Half Running Set', price: 119, offer: -90, sizes: ['L', 'XXL'], content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', quantity: 3 },
],




  healthcaretwins: [
    { id: 16, image: product16, title: 'Half Running Set', price: 119, offer: -90 },
    { id: 17, image: product17, title: 'Half Running Set', price: 119, offer: -90 },
    { id: 18, image: product18, title: 'Half Running Set', price: 119, offer: -90 },
    { id: 19, image: product18, title: 'Half Running Set', price: 119, offer: -90 },
    { id: 20, image: product18, title: 'Half Running Set', price: 119, offer: -90 },
  ],


  cart: [],
  likedItems:[],
};

const rootReducer = (state = initialState, action) => {
  // Your reducer logic goes here
  switch (action.type) {

    case 'ADD_TO_CART':


      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

      case 'ADD_TO_LIKED':
        return {
          ...state,
          likedItems: [...state.likedItems, action.payload],
        };

      case 'REMOVE_TO_LIKED':
        return{
          ...state,
          likedItems: state.likedItems.filter((item) => item.id !== action.payload),
        };


    // Handle other action types if needed
    default:
      return state;
  }
};



export default rootReducer;
