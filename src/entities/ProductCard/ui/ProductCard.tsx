import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Icon,
  HStack,
  Group,
} from "@chakra-ui/react";
import { FaCartPlus, FaHeart, FaBalanceScale } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export interface ProductCardProps {
  image: string;
  alt: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  installment?: string;
  isHit?: boolean;
  bonusLabel?: string;
  onQuickBuy?: () => void;
}




const ProductCard = ({
  image,
  alt,
  title,
  rating,
  reviews,
  price,
  oldPrice,
  installment,
  isHit = false,
  bonusLabel,
  onQuickBuy,
}: ProductCardProps) => {
  return (
    <Box
      bg="white"
      rounded="4xl"
      boxShadow="md"
      overflow="hidden"
      p={4}
      h="100%" // обязательно для одинаковой высоты в сетке
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      fontFamily="body"
    >
      {/* Верхние бейджи */}
      <Flex justify="space-between" align="center" mb={2}>
        {isHit && (
          <Box
            rounded={"full"}
            bg="SCKYellow"
            fontSize="xs"
            p={2}
            fontWeight={"bold"}
          >
            Хит продаж
          </Box>
        )}
        {bonusLabel && (
          <Group            
            gap={1}
            alignItems="center"
            bg={"Motif"}
            color={"WhiteAndBlack"}
            rounded={"full"}
            px={3}
            py={1}
          >
            <Text color={"WhiteAndBlack"}>{bonusLabel}</Text>
            <Box
              position="relative"
              as="span"
              _before={{
                content: "''",
                position: "absolute",
                top: "0.2em",
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "WhiteAndBlack",
              }}
            >
              Б
            </Box>
          </Group>
        )}
      </Flex>

      {/* Обёртка для изображения */}
      <Box
        w={"100%"}
        aspectRatio={1 / 1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={"gray.100"}
      >
        <Image src={image} alt={alt} boxSize="100%" objectFit="contain" />
      </Box>

      {/* Основная информация */}
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text
          fontSize="0.81rem"
          lineClamp="2"
          mb={1}
          fontWeight="medium"
          textAlign="left"
        >
          {title}
        </Text>

        <HStack justify="center" gap={1} fontSize="xs" mb={2}>
          <Icon as={IoIosStar} color="Motif" boxSize={3} />
          <Text fontWeight="bold" color="Motif">
            {rating.toFixed(1)}
          </Text>
          <Text color="gray.500">({reviews} отзывов)</Text>
        </HStack>

        <HStack justify="center" gap={2} mb={1}>
          <Text fontWeight="bold" fontSize="xl" color="purple.600">
            {price.toLocaleString()} ₸
          </Text>
          {oldPrice && (
            <Text as="s" fontSize="sm" color="gray.400">
              {oldPrice.toLocaleString()} ₸
            </Text>
          )}
        </HStack>

        {installment && (
          <Text textAlign="center" fontSize="xs" color="gray.600" mb={2}>
            В рассрочку{" "}
            <Text as="span" fontWeight="bold">
              {installment}
            </Text>
          </Text>
        )}

        <Button
          variant="outline"
          colorScheme="purple"
          size="sm"
          rounded="full"
          w="full"
          fontWeight="medium"
          fontSize="sm"
          mb={3}
          onClick={onQuickBuy}
        >
          Купить в 1 клик
        </Button>

        <HStack justify="space-around" color="Motif" fontSize="sm">
          <Icon as={FaCartPlus} boxSize={4} />
          <Icon as={FaHeart} boxSize={4} />
          <Icon as={FaBalanceScale} boxSize={4} />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
