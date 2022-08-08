import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trackReducer from "./reducers/trackReducer";




const reducers = combineReducers({
    trackReducer: trackReducer
})

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof reducers>;