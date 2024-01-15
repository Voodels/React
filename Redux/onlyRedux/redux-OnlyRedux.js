const redux = require('redux');

const INITIAL_VALUE = {
  counter: 0
}
const reducer = (store = INITIAL_VALUE, action) => {

  return {
    counter: store.counter + 1
  }
}
const createStore = redux.createStore(reducer);
const subcriber = () => {
  console.log('subcriber', store.getState());
}

store.subcriber(subcriber);
store.dispatch({ type: 'INCREMENT' });
