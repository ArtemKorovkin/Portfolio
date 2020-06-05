import React from "react";
import s from "./body.module.scss";
import Social from "./Social/Social";

const Body = props => {
  return (
    <div className={s.body}>
      <h1 className={s.title}>Я Коровкин Артем.</h1>
      <p className={s.text}>
        Я - ученик IT школы. Прошел курсы на позицию
        <span> frontend developer.</span> Очень увлекся этой специальностью,
        особенно интересна разработка на <span>React.</span> Свободное время
        уделяю изучению новой информации, а так же интересуюсь новыми
        технологиями в сфере веб-разработки. В настоящее время являюсь
        сотрудником <span>IT компании Atom.</span> В компании нахожусь на
        должности верстальщика, работаю в системе Bitrix24. Моя главная цель в
        этой профессии - <span>стать востребованным специалистом!!!</span>
      </p>
      <Social />
    </div>
  );
};

export default Body;
