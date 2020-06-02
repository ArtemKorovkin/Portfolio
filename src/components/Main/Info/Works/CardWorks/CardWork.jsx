import React from "react";
import style from "./cardwork.module.scss";

const CardWork = ({ img, title, text }) => {
  console.log({ img });
  return (
    <div className={style.workCard}>
      <div className={style.cardImg}>
        <img src={img} alt="Image Project" />
      </div>
      <h3 className={style.cardTitle}>{title}</h3>
      <p className={style.cardText}>{text}</p>
    </div>
  );
};

export default CardWork;
