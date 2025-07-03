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
      // border={"1px solid var(--chakra-colors--motif)"}
      minW={{
        base: "260px",
        smDown: "100%",
        sm: "100%",
        smToMd: "100%",
        md: "100%",
        mdToLg: "100%",
        lg: "100%",
        lgToXl: "100%",
        xl: "260px",
        xlTo2xl: "260px",
        "2xl": "260px",
      }}
      mb={{
        base: "0",
        smDown: "8px",
        sm: "8px",
        smToMd: "8px",
        md: "8px",
        mdToLg: "8px",
        lg: "8px",
        lgToXl: "0",
        xl: "0",
        xlTo2xl: "0",
        "2xl": "0",
      }}
      // w={{
      //   smDown: "100%",
      //   sm: "100%",
      //   smToMd: "100%",
      //   md: "100%",
      //   mdToLg: "100%",
      //   lg: "100%",
      //   lgToXl: "35%",
      //   xl: "35%",
      //   xlTo2xl: "35%",
      //   "2xl": "35%",
      // }}
      w={"370px"}
      // h={"full"}
      rounded={"2xl"}
      overflow={"clip"}
    >
      <ProductOfDay data={ProductOfDayData} />
    </Box>
  );
}

export default DayOffer