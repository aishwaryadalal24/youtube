import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchQueryCacheSlice from "./searchQueryCacheSlice";

const store = configureStore({
    reducer: {
       sidebar: sidebarSlice,
       searchQueryCache: searchQueryCacheSlice
    }
});

export default store;