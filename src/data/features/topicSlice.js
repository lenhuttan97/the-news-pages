import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopic } from "./fetchNewsAPI";

const initialState = {
    status: '',
    category: '',
    error: '',
    data: []

}



export const loadTopic = createAsyncThunk(
    'topic',
    async (option) => {
        try {
            let fetch = await getTopic({ category: option.topic, page: option.page });
            console.log(option)
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

    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTopic.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadTopic.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload.articles;
            })
            .addCase(loadTopic.rejected, (state, action) => {
                state.status = 'fail';
                state.error = action.error
            })
    }
})


export const { } = topic.actions;

export const news = (state) => state.topic.data[0];
export const topics = (state) => state.topic.data.slice(1,11);
export const status = (state) => state.topic.status;

export default topic.reducer