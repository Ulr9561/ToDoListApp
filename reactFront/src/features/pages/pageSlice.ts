import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
    activePage: string,
}

const initialState: PageState = {
    activePage: 'home',
}

const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setActivePage(state, action: PayloadAction<string>) {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = pageSlice.actions;
export default pageSlice.reducer;