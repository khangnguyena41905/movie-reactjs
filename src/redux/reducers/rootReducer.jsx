import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { TicketRoomReducer } from "./TicketRoomReducer";
export let rootReducer = combineReducers({ UserReducer, TicketRoomReducer });
