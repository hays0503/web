"use client";

import {Button, HStack, Text, VStack } from "@chakra-ui/react";
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
    <VStack gap={3} align={'flex-start'}>
      <Text fontSize="xl" fontWeight="bold">
        Рекомендуем вам
      </Text>
      <HStack gap={3} flexWrap="wrap" justifyContent="flex-start">
        {tabs.map((tab) => {
          const isActive = tab.index === activeIndex;
          return (
            <Button
              transition="all 0.3s ease"
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
              _hover={{
                bg: isActive ? "purple.500" : "purple.50",
                scale: 0.95,
              }}
              borderColor="purple.200"
            >
              {tab.label}
            </Button>
          );
        })}
      </HStack>
    </VStack>
  );
};

export default RecommendChips;
