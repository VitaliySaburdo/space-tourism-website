import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import style from './Destination.module.scss';
import { motion } from 'framer-motion';

export const Destination = ({ data }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const HandleOnClick = (idx) => {
    setCurrentIdx(idx);
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        <span className={style.number}>01</span>
        PICK YOUR DESTINATION
      </h3>
      <div className={style.shell}>
        <div className={style.imgShell}>
          <motion.img
            key={currentIdx}
            initial={{ opacity: 0.4, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
            className={style.img}
            src={data[currentIdx].images.webp}
            alt={data.name}
          />
        </div>
        <div className={style.block}>
          <ul className={style.list}>
            {data.map(({ name }, idx) => {
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
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
          <Outlet />
          <div>
            <h2 className={style.name}>
              {data[currentIdx].name.toUpperCase()}
            </h2>
            <p className={style.description}>{data[currentIdx].description}</p>
            <div className={style.decor}></div>
            <div className={style.box}>
              <div>
                <p className={style.label}>AVG. DISTANCE</p>
                <p className={style.value}>{data[currentIdx].distance}</p>
              </div>
              <div>
                <p className={style.label}>Est. travel time</p>
                <p className={style.value}>{data[currentIdx].travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
