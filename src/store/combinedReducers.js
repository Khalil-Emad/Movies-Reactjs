import { combineReducers } from "redux";
import favoriteReducer from './reducers/toFavorite';
import counterReducer from './reducers/counter';
import languageReducer from './reducers/language';

export default combineReducers({
    favorite : favoriteReducer,
    count:counterReducer,
    language : languageReducer,

})