import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, updateFavoriteStatus } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    entities: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchCars.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCars.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.entities = payload;
    },
    [fetchCars.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    [updateFavoriteStatus.fulfilled]: (state, action) => {
      const { carId, favorite } = action.payload;

      const updatedEntities = state.entities.map(car =>
        car.id === carId ? { ...car, favorite } : car
      );

      state.entities = updatedEntities;
    },
  },
});

export const carsReducer = carsSlice.reducer;
