
import store from './store';
import actions from './actions/TodoActions';
import ReactDOM from 'react-dom';
import Todo from './containers/Todo';
import { Provider } from 'react-redux';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>
, app)

store.dispatch(actions.fetchTodos());
