import React from "react";
import style from "./works.module.scss";
import CardWork from "./CardWorks/CardWork.jsx";
import arrWorks from "../../../StateWorks/StateWork.jsx";

const Works = props => {
  let myWorks = arrWorks.map(works => {
    return (
      <CardWork
        img={works.img}
        title={works.title}
        text={works.text}
        link={works.link}
      />
    );
  });

  return (
    <section className={style.works} id="myWorks">
      <div className="container">
        <h3>Мои первые работы</h3>
        <p>Со временем работы будут пополняться, на этом я не останавливаюсь</p>
        <div className={style.worksInner}>{myWorks}</div>
      </div>
    </section>
  );
};

export default Works;
