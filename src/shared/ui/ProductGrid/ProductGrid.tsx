import ProductCard, { ProductCardProps } from "@/entities/ProductCard/ui/ProductCard";
import { SimpleGrid } from "@chakra-ui/react";

const products: ProductCardProps[] = [
  {
    image: "/promo/promoSlide3.webp",
    alt: "Shivald WH",
    title: "Водонагреватель Shivald Sh WH 15 50 (50 л)",
    rating: 5.0,
    reviews: 13,
    price: 42000,
    oldPrice: 58000,
    installment: "5 500 ₽ х 12 мес",
    isHit: true,
    bonusLabel: "5%",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "Flama CE3201",
    title: "Кухонная плита Flama CE3201 (белый)",
    rating: 5.0,
    reviews: 13,
    price: 84986,
    installment: "8 851 ₽ х 12 мес",
    isHit: true,
    bonusLabel: "7%",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "Стендмебель Сорренто",
    title: "Стендмебель Сорренто (коричневый, бежевый)",
    rating: 5.0,
    reviews: 13,
    price: 59800,
    installment: "8 964 ₽ х 12 мес",
    isHit: true,
    bonusLabel: "5%",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "Бирюса 2106X",
    title: "Морозильник Бирюса 2106X (200 л, белый)",
    rating: 5.0,
    reviews: 13,
    price: 98500,
    installment: "8 703 ₽ х 12 мес",
    isHit: true,
    bonusLabel: "8%",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "Shivald TC 100",
    title: "Стиральная машина Shivald TC 100",
    rating: 5.0,
    reviews: 13,
    price: 83954,
    installment: "5 500 ₽ х 12 мес",
    isHit: true,
    bonusLabel: "5%",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "Leadbros AH-6088",
    title: "Утюг Leadbros AH-6088 (черный)",
    rating: 5.0,
    reviews: 13,
    price: 12000,
    oldPrice: 18000,
    installment: "6 000 ₽ х 3 мес",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "Аксион M32.01",
    title: "Мясорубка Аксион M32.01 (белый)",
    rating: 5.0,
    reviews: 13,
    price: 27968,
    installment: "1 081 ₽ х 12 мес",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "CENTEK CT1460",
    title: "Шашлычница CENTEK CT1460",
    rating: 5.0,
    reviews: 13,
    price: 17778,
    installment: "9 844 ₽ х 12 мес",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "Бирюса WM-SMSI0/04M",
    title: "Стиральная машина Бирюса WM-SMSI0/04M",
    rating: 5.0,
    reviews: 13,
    price: 127953,
    installment: "6 209 ₽ х 12 мес",
  },
  {
    image: "/promo/promoSlide3.webp",
    alt: "Willmark WHO-23D1",
    title: "Фен Willmark WHO-23D1 (2000 Вт)",
    rating: 5.0,
    reviews: 13,
    price: 7442,
    installment: "4 500 ₽ х 12 мес",
  },
];

const ProductGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      gap={4}
    >
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;