import { useState } from 'react';
import style from './Crew.module.scss';

export const Crew = ({ data }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const HandleOnClick = (idx) => {
    setCurrentIdx(idx);
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        <span className={style.number}>02</span>
        MEET YOUR CREW
      </h3>
      <div className={style.shell}>
        <div className={style.wrapper}>
          <div className={style.block}>
            <h3 className={style.role}>{data[currentIdx].role}</h3>
            <h2 className={style.name}>{data[currentIdx].name}</h2>
            <p className={style.bio}>{data[currentIdx].bio}</p>
          </div>
          <ul className={style.list}>
            {data.map((__, idx) => {
              return (
                <li key={idx}>
                  <button
                    className={`${style.btn} ${
                      currentIdx === idx ? style.active : ''
                    }`}
                    onClick={() => {
                      HandleOnClick(idx);
                    }}
                  ></button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.box}>
          <img
            className={style.img}
            src={data[currentIdx].images.webp}
            alt={data.name}
          />
        </div>
      </div>
    </div>
  );
};
