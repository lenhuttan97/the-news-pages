import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    data:{}
}

export const popup = createSlice({
    name: 'popup',
    initialState,
    reducers:{
        onOpen(state, action) {
            state.isOpen = true;
            state.data = action.payload;
        },
        onClose(state) {
            state.isOpen = false;
            state.data = {};
        }
    }
})

export const {onOpen, onClose} = popup.actions;
export default popup.reducer;