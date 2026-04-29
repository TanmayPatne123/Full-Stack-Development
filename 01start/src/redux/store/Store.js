import {legacy_createStore as createStore,applyMiddleware} from 'redux';
import myReducer from '../reducers/myReducer';
import {createLogger} from "redux-logger";


const logger = createLogger();

let myReduxStore =createStore(myReducer,applyMiddleware(logger));

export default myReduxStore;