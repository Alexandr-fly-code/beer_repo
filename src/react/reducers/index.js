import {combineReducers} from 'redux';
import {randomProduct} from './randomReducer';

const rootReducer = combineReducers ({
    randomProduct,
});

export default rootReducer;