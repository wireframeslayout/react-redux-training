import api from '../request';

export default {
  fetchTodos
}

function fetchTodos () {
  return (dispatch, getState) => {

    api.get('/todos')
    .then(function (resp) {
      dispatch(setTodos(resp.data));
    })

  }
}

function setTodos (data) {
  return {
    type: 'FETCHED_TODOS',
    payload: data
  }
}
