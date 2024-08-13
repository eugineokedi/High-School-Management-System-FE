// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://your-api-url.com'; // replace with your API endpoint

// Define the initial state for the auth slice
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Async thunks for sign-up, sign-in, and sign-out
export const signUp = createAsyncThunk('auth/signUp', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const signIn = createAsyncThunk('auth/signIn', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const signOut = createAsyncThunk('auth/signOut', async (_, { rejectWithValue }) => {
  try {
    await axios.post(`${API_URL}/signout`);
    return true;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState, // Explicitly setting the initial state here
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
