// slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk action
export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
  // Your async login logic goes here, e.g., API request
  const response = await api.login(credentials);
  return response.data; // Assuming your API returns user data on success
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false, error : null},
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
