import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./features/popupSlice";
import searchSlice from "./features/searchSlice";
import mainSlice from './features/slice';
import topicSlice from "./features/topicSlice";

export const store = configureStore({
    reducer: {
        headlines: mainSlice,
        topic: topicSlice,
        search:searchSlice,
        popup: popupSlice
    }
})