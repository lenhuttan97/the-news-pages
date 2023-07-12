import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearch } from "./fetchNewsAPI";
import data from '../demo.json';


const initialState = {
    status: '',
    error: '',
    total:'',
    data:[]
}

var fulldata = []

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
    reducers:{
        onNextPage(state, action) {
            if(state.status === 'full') return
            let old = state.data;
            let lengthNew = old.length + 10;
            if (lengthNew >= fulldata.length) {
                state.status = 'full'
                let news = old.concat(fulldata.slice(11, fulldata.length));
                state.data = news;
            } else if (lengthNew < fulldata.length) {
                let news = old.concat(fulldata.slice(11, lengthNew ));
                state.data = news;
            }

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSearch.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadSearch.fulfilled, (state, action) => {
                if(action.payload.status === 'ok'){
                    state.status = 'idle';
                    console.log(state)
                    state.total = action.payload.totalResults;
                    fulldata = action.payload.articles;
                    if(state.total >= 10){
                        state.data = fulldata.slice(0,10);
                    } else {
                        state.data = fulldata;
                    }
                } else {  
                    state.status = 'error';
                    state.error = action.payload.message
                }
               
                
                
            })
            .addCase(loadSearch.rejected, (state, action) =>{
                state.status = 'error';
                state.error = action.error;
            })
    }
})

export const {onNextPage} = search.actions;

export const error = (state) => state.search.error;

export default search.reducer;