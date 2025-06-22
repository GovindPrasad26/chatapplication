import { legacy_createStore ,applyMiddleware,combineReducers} from "redux";
import logger from "redux-logger"
import Reducer from "./reducer";
import UserReducer from "../reducers/userreducer";
import ChatReducer from "../reducers/chatreucer";
import MsgReducer from "../reducers/messagereducer";
import chatInteractionReducer from "../reducers/last";
import lastMessageReducer from "../reducers/lastmessage";
const combine = combineReducers({
   Reducer,
   UserReducer ,
   ChatReducer,
   MsgReducer,
   chatInteraction: chatInteractionReducer,
    lastMessages: lastMessageReducer,
})
const store = legacy_createStore(combine, applyMiddleware(logger));

export default store;
