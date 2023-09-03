import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState:{ open: false  },
    reducers: {
        toggleSidebar:(state) => {
            {state.open = !state.open}
        },
        closeSidebar:(state) => {
            {state.open = false}
        }
    }
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
