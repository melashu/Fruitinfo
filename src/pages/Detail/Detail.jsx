/* eslint-disable */

import React from "react";
import { useParams } from "react-router-dom";

import { useFruitSelector } from "../../coponents/Hook";
import { getFruitInfo } from "../../redux/fruitreducer";
import "./detail.scss";
import fruit from "../../image/fruit.jpg";
const Detail = () => {
  const { id } = useParams();
  const items = useFruitSelector(getFruitInfo);
  const selectedFruit = items.filter((fruit) => fruit.id.toString() === id);
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <img src={fruit} alt="fruit" />
        </div>
        <div className="right">
          <p>Fruit Info</p>
          <p>Name: {selectedFruit[0].name}</p>
          <p>Family: {selectedFruit[0].family}</p>
          <p>Order: {selectedFruit[0].order}</p>
        </div>
      </div>
      <div className="item" key={fruit.id}>
        <div>
          <h1 className="detail-title">
            Detail about {selectedFruit[0].name}{" "}
          </h1>
        </div>
        <div className="item-detail">
          <p>Genus Type: {selectedFruit[0].genus}</p>
          <p>Name: {selectedFruit[0].name}</p>
          <p>Family: {selectedFruit[0].family}</p>
          <p>Order: {selectedFruit[0].order}</p>
          <h2>Nutritions</h2>
          <p>
            Carbohydrates: {selectedFruit[0]["nutritions"]["carbohydrates"]}
          </p>
          <p>Protein: {selectedFruit[0]["nutritions"]["protein"]}</p>
          <p>Sugar: {selectedFruit[0]["nutritions"]["sugar"]}</p>
          <p>Fat: {selectedFruit[0]["nutritions"]["fat"]}</p>
          <p>Calories: {selectedFruit[0]["nutritions"]["calories"]}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
