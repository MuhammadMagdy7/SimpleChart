import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from "../reducer";
import Thunk from 'redux-thunk'

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(Thunk)));