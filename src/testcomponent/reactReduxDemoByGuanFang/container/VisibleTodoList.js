/**
 * Created by ZhangPei on 2019/7/30.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    console.log("加载todolist时的过滤器", filter);
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return todos
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)