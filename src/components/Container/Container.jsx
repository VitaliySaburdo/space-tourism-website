import styles from './Container.module.scss';

export const Container = ({ children, ...props }) => {
  return (
    <>
      <div {...props} className={styles.container}>
        {children}
      </div>
    </>
  );
};
