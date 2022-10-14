import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Footer from '../coponents/footer/Footer';

const FooterTesting = (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

describe('Test Footer component', () => {
  test('Should footer test exist', () => {
    render(FooterTesting);
    const footerText = screen.getByTestId('footer');
    expect(footerText).toBeInTheDocument();
  });
});
