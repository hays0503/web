// RecommendChips.tsx
"use client";

import { Box, Button, HStack, Text } from "@chakra-ui/react";

const tabs = [
  { label: "Хиты продаж", isActive: true },
  { label: "Персональная подборка" },
  { label: "В рассрочку на 24 месяца" },
  { label: "Встречай лето с SCK" },
];

export const RecommendChips = () => {
  return (
    <Box px={{ base: 4, md: 6 }} py={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Рекомендуем вам
      </Text>
      <HStack gap={3} flexWrap="wrap" justifyContent="flex-start">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant="outline"
            colorScheme="purple"
            borderRadius="full"
            px={5}
            py={2}
            fontWeight="medium"
            fontSize="sm"
            bg={tab.isActive ? "purple.400" : "transparent"}
            color={tab.isActive ? "white" : "purple.500"}
            _hover={{ bg: tab.isActive ? "purple.500" : "purple.50" }}
            borderColor="purple.200"
          >
            {tab.label}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default RecommendChips;
