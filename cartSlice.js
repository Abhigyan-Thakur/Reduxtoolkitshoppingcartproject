import { createSlice } from "@reduxjs/toolkit";
const INITIAL = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
    }

})
export const { add } = cartSlice.actions;
export default cartSlice.reducer;