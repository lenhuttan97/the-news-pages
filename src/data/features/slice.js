import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHeadlines } from "./fetchNewsAPI";
import data from '../demo.json'

const initialState = {
    status: '',
    error: '',
    data: [],
}

export const loadHeadlines = createAsyncThunk(
    'headlines',
    async () => {
        try {
            // const response = await getHeadlines();
            // const data = response.json();
            return data;
        }
        catch (error) {
            throw new Error(error)
        }
    }

);

const mainSlice = createSlice({
    name: 'headlines',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loadHeadlines.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadHeadlines.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload.articles;
            })
            .addCase(loadHeadlines.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            ;
    }

})

export const { } = mainSlice.actions;

export const headline = (state) => state.headlines.data.slice(0, 5);
export const lastestNew = (state) => state.headlines.data.slice(5, 8);
export const mustRead = (state) => state.headlines.data.slice(8, 12);

export default mainSlice.reducer;
