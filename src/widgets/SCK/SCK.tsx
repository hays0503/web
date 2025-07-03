import { HeaderSCK } from "@/shared/ui"
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";

const SCKBanner = () => {

  return (
    <Box
      as="section"
      w="full"
      bg="white"
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 12 }}
      boxShadow="sm"
      rounded="4xl"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: 6, md: 12 }}
    >
      {/* Логотип */}
      <HStack align={"center"} justify={"center"} w={"full"} h={"auto"}>
        <Image
          src="/logo/logo.svg"
          alt="SCK Logo"
          maxW={{ base: "250px", md: "350px" }}
          height="auto"
        />
      </HStack>

      {/* Текст */}
      <VStack align="start" gap={4} maxW="600px">
        <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }}>
          Продавать в Интернет-магазине на SCK.kz
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.700">
          Более 5 млн покупателей, доставка товаров по всему Казахстану,
          возможность продавать в кредит и рассрочку.
        </Text>
        <Link
          href="#"
          color="blue.600"
          fontWeight="medium"
          fontSize={{ base: "sm", md: "md" }}
          textDecoration="underline"
        >
          Начать продавать в Интернет-магазине
        </Link>
      </VStack>
    </Box>
  );
};

const SCK = () => {
    return (
      <VStack
        w={"100%"}
        gap={"20px"}
        justify={"flex-start"}
        align={"flex-start"}
      >
        <HeaderSCK>Стать Партнёром</HeaderSCK>
        <SCKBanner />
      </VStack>
    );
}

export default SCK;