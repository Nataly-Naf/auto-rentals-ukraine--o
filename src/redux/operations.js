// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://65d61695f6967ba8e3bd7bca.mockapi.io';

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65d61695f6967ba8e3bd7bca.mockapi.io';

export const fetchTotalAutos = createAsyncThunk(
  'autos/fetchTotal',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/autos');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAutos = createAsyncThunk(
  'autos/fetchAll',
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get('/autos', {
        params: {
          page: page,
          limit: 12,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchNextAutos = createAsyncThunk(
  'autos/fetchNext',
  async (nextPage, thunkAPI) => {
    try {
      const response = await axios.get('/autos', {
        params: {
          page: nextPage,
          limit: 12,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
