"use client";

import { HeaderSCK } from "@/shared/ui";
import {Button, HStack, VStack } from "@chakra-ui/react";
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
    <VStack gap={"20px"} align={'flex-start'}>
      <HeaderSCK>
        Рекомендуем вам
      </HeaderSCK>
      <HStack gap={"15px"} flexWrap="wrap" justifyContent="flex-start">
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
              bg={isActive ? "Motif" : "transparent"}
              color={isActive ? "white" : "Motif"}
              _hover={{
                bg: isActive ? "Motif" : "purple.50",
                scale: 0.95,
              }}
              borderColor="Motif"
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
