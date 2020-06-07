import React from "react";
import style from "./cardwork.module.scss";

const CardWork = ({ img, title, text, link }) => {
  return (
    <div className={style.workCard}>
      <div className={style.cardImg}>
        <img src={img} alt="Project" />
      </div>
      <h3 className={style.cardTitle}>{title}</h3>
      <p className={style.cardText}>{text}</p>
      <a className={style.cardLink} href={link}>
        Подробнее
      </a>
    </div>
  );
};

export default CardWork;
