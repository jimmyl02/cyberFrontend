import { combineReducers } from "redux";

import { reportReducer } from "./reportReducer";

export const reducers = combineReducers({
    report: reportReducer
});