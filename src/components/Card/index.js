import React from "react";
import s from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={s.card}>
      <h3>Lorem ipsum dolor sit amet</h3>
      <div className={s.cardItem}>
        <p>
          <img alt="" src={props.item} className={s.itemImg} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
          est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
    </div>
  );
};

export default Card;
