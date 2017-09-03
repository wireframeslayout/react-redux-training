import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, props) {
    return {
      todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: function() {
      dispatch(actions.fetchTodos());
    },
  }
}

const Todo = ({ dispatch, fetchTodos, todos }) => {
  return (
  <div className="todo">
    <div className="todo-list col-lg-6 col-lg-offset-3">
      <h1>TODO LIST</h1>
      <hr />
      <div className="form-group form-group-sm">
        <div className="form-inline">
          <input type="text" className="form-control" size="40" placeholder="タスクを記入してください" />
          <button className="btn btn-default btn-sm">タスクを追加する</button>
        </div>
      </div>
      <div className="todo-list">
        <ul>
          { todos.map( list => {
            return <li key={list.id} className="todo-list-item"><input type="checkbox" />{list.title} <button className="pull-right btn btn-default btn-sm">削除</button></li>
          }) }
        </ul>
      </div>
    </div>
  </div>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
