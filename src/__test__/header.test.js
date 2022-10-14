import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../coponents/header/Header';

const HeaderForTesting = (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
describe('Testing Header Component', () => {
  render(HeaderForTesting);
  test('Test Header', () => {
    const link = screen.getByText('Fruit Info');
    expect(link).toBeInTheDocument();
  });
  test('Test Back Button exist or not', () => {
    render(HeaderForTesting);

    const back = screen.getByTestId('back-icon');
    expect(back).toBeInTheDocument();
  });

  test('Shiuld setting icon exist', () => {
    render(HeaderForTesting);

    const back = screen.getByTestId('setting');
    expect(back).toBeInTheDocument();
  });
});
