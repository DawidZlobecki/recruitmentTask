import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

export const withRedux = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);
