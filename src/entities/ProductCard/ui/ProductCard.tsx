import {
  VStack,
} from "@chakra-ui/react";
import Tags from "./SubModule/Tags";
import ProductImage from "./SubModule/ProductImage";
import ProductName from "./SubModule/ProductName";
import ProductRating from "./SubModule/ProductRating";
import ProductPrice from "./SubModule/ProductPrice";
import ProductInstallmentPlan from "./SubModule/ProductInstallmentPlan";
import ProductBuyOneClick from "./SubModule/ProductBuyOneClick";
import ProductButtons from "./SubModule/ProductButtons";

export interface ProductCardProps {
  image: string[];
  alt: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  installment?: {
    period: number; // в месяцах
    monthlyPayment: number; // ежемесячный платеж
  };
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
    <VStack
      bg="white"
      _dark={{ bg: "gray.800" }}
      rounded="4xl"
      boxShadow="md"
      overflow="hidden"
      p={3}
      h="100%" // обязательно для одинаковой высоты в сетке
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      fontFamily="body"
      gap={4}
    >
      {/* Верхние бейджи */}
      <Tags isHit={isHit} bonusLabel={bonusLabel} />

      {/* Обёртка для изображения */}
      <ProductImage image={image} alt={alt} />

      {/* Основная информация */}
      <VStack w={"full"}>
        <ProductName title={title} />

        <ProductRating rating={rating} reviews={reviews} />

        <ProductPrice price={price} oldPrice={oldPrice} />

        <ProductInstallmentPlan installment={installment} />

        <ProductBuyOneClick onQuickBuy={onQuickBuy} />

        <ProductButtons />
      </VStack>
    </VStack>
  );
};

export default ProductCard;
