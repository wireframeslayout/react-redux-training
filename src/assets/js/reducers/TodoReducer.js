const _state = {
  todos: []
}

export default (state=_state, action) => {

  switch (action.type) {

    case 'FETCHED_TODOS':
      return Object.assign({}, state, { todos: action.payload })
    break;

  }

  return state;

}
