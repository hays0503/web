"use client";
import { Box, HStack } from "@chakra-ui/react"
import { useState, useEffect } from "react";

const formatTime = (time: number) => {
  return time.toString().padStart(2, "0");
};

const Timer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });


    useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);


    return (
      <HStack gap={"0.3rem"}>
        <Box
          bg={"gray.200"}
          minW={"35px"}
          rounded={"xl"}
          p={2}
          fontSize={"14px"}
          fontWeight={650}
          textAlign={"center"}
        >
          {formatTime(timeLeft.hours)}
        </Box>
        {":"}
        <Box
          bg={"gray.200"}
          minW={"35px"}
          rounded={"xl"}
          p={2}
          fontSize={"14px"}
          fontWeight={650}
          textAlign={"center"}
        >
          {formatTime(timeLeft.minutes)}
        </Box>
        {":"}
        <Box
          bg={"gray.200"}
          minW={"35px"}
          rounded={"xl"}
          p={2}
          fontSize={"14px"}
          fontWeight={650}
          textAlign={"center"}
        >
          {formatTime(timeLeft.seconds)}
        </Box>
      </HStack>
    );
}

export default Timer;