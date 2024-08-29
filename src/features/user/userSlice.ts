import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserByUsername } from './userAction';
import { User } from '../../types/user';

interface UserState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UserState = {
    user: null,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserByUsername.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUserByUsername.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchUserByUsername.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch user';
            });
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;