import { useState } from 'react';
import style from './Technology.module.scss';

export const Technology = ({ data }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const HandleOnClick = (idx) => {
    setCurrentIdx(idx);
  };
  return (
    <div className={style.container}>
      <h3 className={style.title}>
        <span className={style.number}>03</span>
        SPACE LAUNCH 101
      </h3>
      <div className={style.shell}>
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
                >
                  {idx + 1}
                </button>
              </li>
            );
          })}
        </ul>
        <div className={style.block}></div>
      </div>
    </div>
  );
};
