import { useState, useEffect } from 'react';
import style from './Technology.module.scss';
import { AnimatedText, StaticAnimate } from '../Animate';

export const Technology = ({ data }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const HandleOnClick = idx => {
    setCurrentIdx(idx);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIdx(prevIdx => (prevIdx + 1) % data.length);
    }, 6000);
    setIntervalId(intervalId);
    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        <span className={style.number}>03</span>
        SPACE LAUNCH 101
      </h3>
      <div className={style.shell}>
        <div className={style.box}>
          <div className={style.infoBlock}>
            <ul className={style.list}>
              {data.map((__, idx) => {
                return (
                  <li key={idx}>
                    <button
                      className={`${style.btn} ${currentIdx === idx ? style.active : ''}`}
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
            <div className={style.block}>
              <StaticAnimate>
                <h3 className={style.terminology}>THE TERMINOLOGY…</h3>
              </StaticAnimate>
              <AnimatedText key={currentIdx}>
                <AnimatedText delay={0.4}>
                  <h2 className={style.name}>{data[currentIdx].name}</h2>
                </AnimatedText>
                <AnimatedText delay={0.6}>
                  <p className={style.description}>{data[currentIdx].description}</p>
                </AnimatedText>
              </AnimatedText>
            </div>
          </div>
          <StaticAnimate key={currentIdx}>
            <div className={style.imgContainer}>
              <img className={style.img} src={data[currentIdx].images.portrait} alt={data.name} />
            </div>
          </StaticAnimate>
        </div>
      </div>
    </div>
  );
};
