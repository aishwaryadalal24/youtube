import { createSlice } from "@reduxjs/toolkit";

const SearchQueryCacheSlice = createSlice({
    name: 'searchQuery',
    initialState: {},
    reducers: {
        storeToCache: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    }
});

export const { storeToCache } = SearchQueryCacheSlice.actions;
export default SearchQueryCacheSlice.reducer;
