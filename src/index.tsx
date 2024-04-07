import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/css/theme.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './assets/css/common.css';
import store from './store/store.ts';
import { Provider } from 'react-redux';

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
