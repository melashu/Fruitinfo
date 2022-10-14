import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from '../pages/Home/Home';
import customerRender from './customerRender';

describe('Testing the whole UI', () => {
  const hundler = [
    rest.get('api/fruit/all', (reg, res, cx) => res(
      cx.json([
        {
          genus: 'Diospyros',
          name: 'Persimmon',
          id: 52,
          family: 'Ebenaceae',
          order: 'Rosales',
          nutritions: {
            carbohydrates: 18,
            protein: 0,
            fat: 0,
            calories: 81,
            sugar: 18,
          },
        },
        {
          genus: 'Musa',
          name: 'Banana',
          id: 1,
          family: 'Musaceae',
          order: 'Zingiberales',
          nutritions: {
            carbohydrates: 22,
            protein: 1,
            fat: 0.2,
            calories: 96,
            sugar: 17.2,
          },
        },
        {
          genus: 'Rubus',
          name: 'Blackberry',
          id: 64,
          family: 'Rosaceae',
          order: 'Rosales',
          nutritions: {
            carbohydrates: 9,
            protein: 1.3,
            fat: 0.4,
            calories: 40,
            sugar: 4.5,
          },
        },
      ]),
    )),
  ];

  const server = setupServer(...hundler);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  test('Test Home', async () => {
    customerRender(<Home />);
    const inputBox = screen.getByText('Total number of fruit');
    expect(inputBox).toBeInTheDocument();
  });

  it('Dose the search box present in the screen', async () => {
    customerRender(<Home />);
    const result = await screen.findByPlaceholderText('Search fruit....');
    expect(result).toBeInTheDocument();
  });

  it('Should three fruit exist', async () => {
    customerRender(<Home />);
    const result = await screen.findAllByTestId('fruitname');
    expect(result).toHaveLength(3);
  });

  it('Should the navigation work?', async () => {
    customerRender(<Home />);
    const link = await screen.findAllByRole('link');
    fireEvent.click(link[0], () => {
      expect(screen.getByText('Detail about')).toBeInTheDocument();
    });
  });

  it('Should Nutritions title exist in the detail page?', async () => {
    customerRender(<Home />);
    const link = await screen.findAllByRole('link');
    fireEvent.click(link[0], () => {
      expect(screen.getByText('Nutritions')).toBeInTheDocument();
    });
  });

  it('Should Diospyros exist?', async () => {
    customerRender(<Home />);
    const link = await screen.findAllByRole('link');
    fireEvent.click(link[0], () => {
      expect(screen.getByText('Diospyros')).toBeInTheDocument();
    });
  });

  it('Should back to home icon exist?', async () => {
    customerRender(<Home />);
    const link = await screen.findAllByRole('link');
    fireEvent.click(link[0], () => {
      expect(screen.getByTestId('backbutton')).toBeInTheDocument();
    });
  });
});
