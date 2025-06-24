"use client";

import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

type TabItem = {
  index: number;
  label: string;
};

const tabs: TabItem[] = [
  { index: 0, label: "Хиты продаж" },
  { index: 1, label: "Персональная подборка" },
  { index: 2, label: "В рассрочку на 24 месяца" },
  { index: 3, label: "Встречай лето с SCK" },
];

export const RecommendChips = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Box px={{ base: 4, md: 6 }} py={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Рекомендуем вам
      </Text>
      <HStack gap={3} flexWrap="wrap" justifyContent="flex-start">
        {tabs.map((tab) => {
          const isActive = tab.index === activeIndex;
          return (
            <Button
              key={tab.index}
              onClick={() => setActiveIndex(tab.index)}
              variant="outline"
              colorScheme="purple"
              borderRadius="full"
              px={5}
              py={2}
              fontWeight="medium"
              fontSize="sm"
              bg={isActive ? "purple.400" : "transparent"}
              color={isActive ? "white" : "purple.500"}
              _hover={{ bg: isActive ? "purple.500" : "purple.50" }}
              borderColor="purple.200"
            >
              {tab.label}
            </Button>
          );
        })}
      </HStack>
    </Box>
  );
};

export default RecommendChips;
