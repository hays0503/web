import { Box } from "@chakra-ui/react";
import { ProductType } from "../type/Promo";
import { ProductOfDay } from "./SubModule";


const ProductOfDayData: ProductType[] = [
  {
    id: 1,
    name: "Кухонная плита FLAMA SHV-1000 белый",
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
    name: "Кухонная плита FLAMA SHV-1000 электрическая белая, много текста",
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
        lgToXl: "35%",
        xl: "35%",
        xlTo2xl: "35%",
        "2xl": "35%",
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