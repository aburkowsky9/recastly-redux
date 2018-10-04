import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

// function configureStore() {
//   return createStore(rootReducer);
// }


var store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());

export default store;