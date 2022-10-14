/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import { SearchRounded } from '@mui/icons-material';
import { fruitThunk, getFruitInfo, getLoading } from '../../redux/fruitreducer';
import { useFruitDispatch, useFruitSelector } from '../../coponents/Hook';
import './home.scss';
import fruit from '../../image/fruit.jpg';

const Home = () => {
  const fruitList = useFruitSelector(getFruitInfo);
  const loading = useFruitSelector(getLoading);
  const dispatch = useFruitDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = fruitList.filter((fruit) => {
    if (searchTerm === '') return fruit;
    if (fruit.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return fruit;
    }
    return null;
  });
  // const dataLength = fruitList[0].keys.length;
  useEffect(() => {
    if (fruitList.length === 0) dispatch(fruitThunk());
  }, [dispatch, fruitList.length]);

  return (
    <div className="home-container">
      <div className="top">
        <div className="left">
          <img src={fruit} alt="fruit" />
        </div>
        <div className="right">
          <p>Fruit Info</p>
          <p>Total number of fruit </p>
          <p data-testid="count">{fruitList.length}</p>
        </div>
      </div>
      {(loading === 'pending' || loading === 'idel') && (
        <HashLoader
          loading
          color="#fff"
          size={55}
          data-testid="hashloader"
          cssOverride={{
            position: 'absolute',
            top: '120%',
            left: '45%',
          }}
          speedMultiplier={1}
        />
      )}
      {' '}
      {loading === 'rejected' && (
        <div className={`loading ${loading}`}>Something went wrong...</div>
      )}
      {' '}
      {loading === 'success' && (
        <div className="bottom">
          <h2>Filter Fruit by name</h2>
          <div className="search">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search fruit...."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <SearchRounded className="icon" />
          </div>
          <div className="items">
            {filtered.map((item) => (
              <div key={item.name}>
                <Link to={`fruitdetail/${item.id}`} className="item">
                  <div className="item-container">
                    <p data-testid="fruitname">
                      Fruit Name :
                      {item.name}
                    </p>
                    <p>
                      Fruit Family :
                      {item.family}
                    </p>
                    <p>
                      Carbohydrates :
                      {item.nutritions.carbohydrates}
                    </p>
                  </div>
                  <span>
                    <ArrowRightIcon className="icon" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {' '}
    </div>
  );
};

export default Home;
