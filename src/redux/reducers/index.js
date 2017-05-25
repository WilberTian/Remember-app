import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({
    tabReducer,
    routing: routerReducer
});

export default rootReducer;
