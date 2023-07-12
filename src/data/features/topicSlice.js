import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopic } from "./fetchNewsAPI";
import data from '../demo.json';

const initialState = {
    status: '',
    error: '',
    data: []

}

var fulldata = []

export const loadTopic = createAsyncThunk(
    'topic',
    async (option) => {
        try {
            let fetch = await getTopic({ category: option.topic, page: option.page });
            let data = fetch.json();
            return data;
        } catch (error) {
            throw new Error(error)
        }
    }
)

const topic = createSlice({
    name: 'topic',
    initialState,
    reducers: {
        onNextPage(state, action) {
            if (state.status === 'full') return
            let old = state.data;
            let lengthNew = old.length + 10;
            if (lengthNew >= fulldata.length) {
                state.status = 'full'
                let news = old.concat(fulldata.slice(11, fulldata.length));
                state.data = news;
            } else if (lengthNew < fulldata.length) {
                let news = old.concat(fulldata.slice(11, lengthNew));
                state.data = news;
            }

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTopic.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadTopic.fulfilled, (state, action) => {
                if (action.payload.status === 'ok') {
                    state.status = 'idle';
                    fulldata = action.payload.articles;
                    state.data = action.payload.articles.slice(1, 11);
                } else {
                    state.status = 'error';
                    state.error = action.payload.message
                }
            })
            .addCase(loadTopic.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error
            })
    }
})


export const { onNextPage } = topic.actions;

export const news = (state) => state.topic.data[0];
export const topics = (state) => state.topic.data;
export const status = (state) => state.topic.status;
export const error = (state) => state.topic.error;

export default topic.reducer