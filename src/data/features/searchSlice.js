import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearch } from "./fetchNewsAPI";



const initialState = {
    status: '',
    total:'',
    data:[]
}

const pages = []

export const loadSearch = createAsyncThunk(
    'search',
    async (input) =>{
        try {
            let fetch = await getSearch(input);
            let data = fetch.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
)

export const search = createSlice({
    name: 'search',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(loadSearch.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadSearch.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload.articles;
                state.total = action.payload.totalResults;
            })
            .addCase(loadSearch.rejected, (state, action) =>{
                state.status = 'fail';
                state.error = action.error;
            })
    }
})

export const {} = search.actions
export default search.reducer;