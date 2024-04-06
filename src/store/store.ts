import { configureStore, createSlice } from '@reduxjs/toolkit';

interface ApiUrlState {
  url: string;
}

const initialState: ApiUrlState = {
  url: import.meta.env.VITE_API_URL,
};

const apiUrlSlice = createSlice({
  name: 'apiUrl',
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    apiUrl: apiUrlSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
