import { motion } from 'framer-motion';
import { varContainer } from '@/animate/container';

export const MotionViewport = ({ children, ...rest }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...rest}>
      {children}
    </motion.div>
  );
};
