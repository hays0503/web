import { Box } from "@chakra-ui/react";
import { ProductType } from "../type/Promo";
import { ProductOfDay } from "./SubModule";


const ProductOfDayData: ProductType[] = [
  {
    id: 1,
    name: "Product 1",
    discount: "20%",
    price: "71 139",
    discountPrice: "85 366",
    image: "/promo/promoSlide5.webp",
    rating: 4.5,
    delivered: {
      days: "next day",
      pays: "free",
      selfPickup: false,
    },
  },
  {
    id: 2,
    name: "Product 2",
    discount: "20%",
    price: "171 139",
    discountPrice: "185 366",
    image: "/promo/promoSlide5.webp",
    rating: 4.1,
    delivered: {
      days: "next day",
      pays: "free",
      selfPickup: false,
    },
  },
];

const DayOffer:React.FC = () => {
  return (
    <Box
      border={"1px solid var(--chakra-colors--motif)"}
      minW={"260px"}
      w={{
        smDown: "100%",
        sm: "100%",
        smToMd: "100%",
        md: "100%",
        mdToLg: "100%",
        lg: "100%",
        lgToXl: "45%",
        xl: "45%",
        xlTo2xl: "45%",
        "2xl": "45%",
      }}
      // h={"full"}
      rounded={"2xl"}
      overflow={"clip"}
    >
      <ProductOfDay data={ProductOfDayData} />
    </Box>
  );
}

export default DayOffer