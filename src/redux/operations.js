import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';

export const fetchCars = createAsyncThunk(
  'cars/getCars',
  async (_, { rejectWithValue }) => {
    try {
      const cars = await api.fetchCars();
      return cars;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateFavoriteStatus = createAsyncThunk(
  'cars/updateFavoriteStatus',
  async ({ carId, favorite }, { rejectWithValue }) => {
    try {
      await api.updateCarFavoriteStatus(carId, favorite);
      return { carId, favorite };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
