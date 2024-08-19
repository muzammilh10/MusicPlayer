import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Correct import for thunk middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import { songReducer } from './reducers/songReducer';
import { userReducer } from './reducers/userReducer';

const initialState = {};

const reducer = combineReducers({
    mainSong: songReducer,
    account: userReducer,
});

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;
