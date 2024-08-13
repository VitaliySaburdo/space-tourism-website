import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '../Animate';
import style from './Crew.module.scss';

export const Crew = ({ data }) => {
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
    }, 4000);
    setIntervalId(intervalId);
    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        <span className={style.number}>02</span>
        MEET YOUR CREW
      </h3>
      <div className={style.shell}>
        <div className={style.wrapper}>
          <div className={style.block}>
            <AnimatedText key={currentIdx}>
              <AnimatedText delay={0.4}>
                <h3 className={style.role}>{data[currentIdx].role}</h3>
              </AnimatedText>
              <AnimatedText delay={0.6}>
                <h2 className={style.name}>{data[currentIdx].name}</h2>
              </AnimatedText>
              <AnimatedText delay={0.8}>
                <p className={style.bio}>{data[currentIdx].bio}</p>
              </AnimatedText>
            </AnimatedText>
          </div>
          <ul className={style.list}>
            {data.map((__, idx) => {
              return (
                <li key={idx}>
                  <button
                    className={`${style.btn} ${currentIdx === idx ? style.active : ''}`}
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
          <div className={style.wrapper}>
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img className={style.img} src={data[currentIdx].images.webp} alt={data.name} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
