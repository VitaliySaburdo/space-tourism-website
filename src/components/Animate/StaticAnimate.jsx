import { motion } from 'framer-motion';

export const StaticAnimate = ({ children, duration = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};
