// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://65d61695f6967ba8e3bd7bca.mockapi.io';

// export const fetchAutos = createAsyncThunk(
//   'autos/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/autos');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65d61695f6967ba8e3bd7bca.mockapi.io';

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
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const nextPage = state.autos.nextPage; // Получаем номер следующей страницы из состояния
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
