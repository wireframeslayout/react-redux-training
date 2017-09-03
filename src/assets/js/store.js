import reducer from './reducers/TodoReducer';
import thunk from 'redux-thunk';

export default redux.createStore(reducer, redux.applyMiddleware(thunk));
