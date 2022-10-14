/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import fruitreducer from '../redux/fruitreducer';

export default function customerRender(
  component,
  {
    store = configureStore({
      reducer: { fruit: fruitreducer },
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper(prop) {
    const { children } = prop;
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return {
    store,
    ...render(component, { wrapper: Wrapper, ...renderOptions }),
  };
}
