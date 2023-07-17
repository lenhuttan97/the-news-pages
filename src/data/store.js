import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./features/popupSlice";
import searchSlice from "./features/searchSlice";
import mainSlice from './features/slice';
import topicSlice from "./features/topicSlice";
import sliceAll from "./features/sliceAll";

export const store = configureStore({
    reducer: {
        all: sliceAll,
        headlines: mainSlice,
        topic: topicSlice,
        search:searchSlice,
        popup: popupSlice
    }
})