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
        showWishlist(state) {
        state.showWishlist = true;
        }
    },
})

export const { showLoginForm, closeLoginForm, showWishlist } = uiSlice.actions;
export default uiSlice.reducer;