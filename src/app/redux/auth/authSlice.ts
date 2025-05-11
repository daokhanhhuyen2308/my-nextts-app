import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { clear } from 'console';
import { User } from 'firebase/auth';

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;

}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<User>){
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearCurrentUser(state){
            state.user = null;
            state.isAuthenticated = false;
        }
        
    },
});

export const {setCurrentUser, clearCurrentUser} = authSlice.actions;
export default authSlice.reducer;