/**
 * Created by ZhangPei on 2019/7/30.
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
};

export default visibilityFilter;