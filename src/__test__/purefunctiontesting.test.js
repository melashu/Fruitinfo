import { getFruitInfo, getLoading } from '../redux/fruitreducer';

const initialState = {
  fruit: {
    fruit: [
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
    ],
  },
  loadingStatus: 'idel',
};

describe('Dose get fruit info method return the state?', () => {
  test('Test getFruitInfo method', () => {
    const fruit = getFruitInfo(initialState);
    expect(fruit).toHaveLength(3);
  });
  test('Test getFruitInfo methos', () => {
    const fruit = getLoading(initialState);
    expect(fruit).not.toEqual('pending');
  });
});
