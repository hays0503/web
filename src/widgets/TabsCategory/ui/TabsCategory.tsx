import { LinkSCK } from "@/shared/ui";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

interface TabsCategoryType {
  readonly img: string;
  readonly text: string;
  readonly url: string;
}

const TabsCategoryData: TabsCategoryType[] = [
  {
    img: "/promo/promoSlide3.webp",
    text: "Бытовая техника",
    url: "/category/бытовая-техника",
  },
  {
    img: "/promo/promoSlide3.webp",
    text: "Товары для дома и дачи",
    url: "/category/товары-для-дома-и-дачи",
  },
  {
    img: "/promo/promoSlide3.webp",
    text: "Мебель",
    url: "/category/мебель",
  },
  {
    img: "/promo/promoSlide3.webp",
    text: "Красота и здоровье",
    url: "/category/красота-и-здоровье",
  },
  {
    img: "/promo/promoSlide3.webp",
    text: "Телевизоры",
    url: "/category/телевизоры",
  },
];

const TabsCategory = () => {
  return (
    <Box w="full" px={4} py={6} bg="gray.100" overflowX={"auto"}>
      <Grid
        templateColumns="repeat(5, minmax(120px, 1fr))"
        gap={4}
        w="full"
      >
        {TabsCategoryData.map((item) => (
          <LinkSCK key={item.url} href={item.url}>
            <Box textAlign="center" w="full">
              <Box
                w="100%"
                aspectRatio={1}
                minW="120px"
                minH="120px"
                bg="white"
                borderRadius="2xl"
                overflow="hidden"
                position="relative"
              >
                <Image
                  src={item.img}
                  alt={item.text}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Heading size="2xl" mt={2} fontSize="sm">
                {item.text}
              </Heading>
            </Box>
          </LinkSCK>
        ))}
      </Grid>
    </Box>
  );
};

export default TabsCategory;
