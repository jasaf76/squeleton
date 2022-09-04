import { combineReducers } from 'redux';
import blog from './blog';
import categories from './categories';
import web3 from './web3';
import courses from './courses';
import user from './user';
import alert from './alert';

export default combineReducers({
    blog,
    categories,
    web3,
    courses,
    user,
    alert
})