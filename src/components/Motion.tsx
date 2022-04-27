import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

interface Props {
  children: React.ReactNode;
  delay: string;
  duration?: string;
  yparameter?: number;
}
const Motion = ({ children, delay, duration }: Props) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 3, opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </StyledDiv>
);

export default Motion;
