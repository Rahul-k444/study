import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
	name: "count",
	initialState: {
		count: 0,
	},
	reducers: {
		incCount: (initialState) => {
			initialState.count += 1;
		},
		decCount: (initialState) => {
			initialState.count -= 1;
		},
	},
});

export const { incCount, decCount } = countSlice.actions;
export default countSlice.reducer;
