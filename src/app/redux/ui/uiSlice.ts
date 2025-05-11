import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  showLogin: boolean;
  showWishlist: boolean;
}

const initialState: UiState = {
  showLogin: false,
  showWishlist: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showLoginForm(state) {
        state.showLogin = true;
        },
        closeLoginForm(state) {
        state.showLogin = false;
        },
    },
})

export const { showLoginForm, closeLoginForm } = uiSlice.actions;
export default uiSlice.reducer;