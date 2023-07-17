import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getHeadlines, getTopic } from "./fetchNewsAPI";
import { loadHeadlines } from "./slice";
import { arrTopic, loadTopic } from "./topicSlice";

const initialState = {
    status : '',
    error: '',
    data:[]
}


export var business = [];

export var entertainment = [];

export var general = [];

export var health = [];

export var science = [];

export var sports = [];

export var technology = [];

export const loadAll = createAsyncThunk(
    'all',
    async () => {
        try {
           const data = Promise.all(
            // getHeadlines,
            loadHeadlines()
            // arrTopic.map((topic) => getTopic({category:topic, page: 1}))
           )
            return data;
        }
        catch (error) {
            throw new Error(error)
        }
    }

);

// const dispatch = useDispatch();

const allSlice = createSlice({
    name: 'all',
    initialState,
    reducers:{
        loadAll(state, action) {
      
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loadAll.pending , (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(loadAll.fulfilled , (state, action) => {
    //             state.status = 'idle';
    //             let data =action.payload;
    //             // state.data = data
    //             console.log(data[0])
    //         })
    //         .addCase(loadAll.rejected , (state, action) => {
    //             state.status = 'error';
    //             state.error = action.error
    //         })
    // }

})

export default allSlice.reducer;