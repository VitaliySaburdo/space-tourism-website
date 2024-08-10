import { motion } from 'framer-motion';

export const AnimatedText = ({ children, delay = 0, duration = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
