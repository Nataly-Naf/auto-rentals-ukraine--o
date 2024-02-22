import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65d61695f6967ba8e3bd7bca.mockapi.io';

export const fetchAutos = createAsyncThunk(
  'autos/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/autos');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
