import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import style from './Destination.module.scss';

export const Destination = ({ data }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const HandleOnClick = (idx) => {
    setCurrentIdx(idx);
  };

  return (
    <div className={style.container} style={{ paddingTop: '200px' }}>
      <h3 className={style.title}>
        <span className={style.number}>01</span>
        PICK YOUR DESTINATION
      </h3>
      <div className={style.shell}>
        <img
          className={style.img}
          src={data[currentIdx].images.webp}
          alt={data.name}
        />
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
            <h2>{data[currentIdx].name}</h2>
            <p>{data[currentIdx].description}</p>
            <div></div>
            <div>
              <div>
                <p>distance</p>
                <p>{data[currentIdx].distance}</p>
              </div>
              <div>
                <p>travel</p>
                <p>{data[currentIdx].travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
