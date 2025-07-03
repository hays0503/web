"use client";

import { useScrolledPastVh, useScrollToElementById } from "@/shared/hooks";
import { Box, IconButton } from "@chakra-ui/react";
import { FaAngleUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const UpButton: React.FC = () => {
  const isPast200vh = useScrolledPastVh("#Main", 1);
  const actionScroll = useScrollToElementById("#Main");
  const action = () => {    
    actionScroll();
  };

  return (
    <AnimatePresence>
      {isPast200vh && (
        <MotionBox
          key="scroll-up-button"
          position="fixed"
          right="30px"
          bottom="30px"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.3 }}
          zIndex={1000}
        >
          <IconButton
            transition="all 0.3s ease"
            _hover={{
              bg: "WhiteAndBlack",
              color: "Motif",
              transform: "scale(0.9)",
              border: "1px solid var(--chakra-colors--motif)",
            }}
            width="64px"
            height="64px"
            onClick={action}
            bg="Motif"
            color="WhiteAndBlack"
            rounded="full"
            aria-label="Scroll to top"
          >
            <FaAngleUp
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          </IconButton>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default UpButton;
