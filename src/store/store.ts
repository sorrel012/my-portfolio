import { configureStore, createSlice } from '@reduxjs/toolkit';

interface ApiUrlState {
  url: string;
}

const initialState: ApiUrlState = {
  url:
    import.meta.env.VITE_API_URL === 'LOCAL'
      ? 'http://localhost:9011/'
      : '임시',
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

export default store;
