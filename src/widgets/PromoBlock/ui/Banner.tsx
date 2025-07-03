import { Box } from "@chakra-ui/react";
import { SlideType } from "../type/Promo";
import { Promo } from "./SubModule";

const SlideData: SlideType[] = [
  {
    title: "",
    description: "",
    image: "/promo/promoSlide4.webp",
    imageMobile: "/promo/promoSlide4-mobile.webp",
  },
  {
    title: "",
    description: "",
    image: "/promo/promoSlide4.webp",
    imageMobile: "/promo/promoSlide4-mobile1.webp",
  },
];


const Banner:React.FC = () => {
  return (
    <Box
      // border={"1px solid var(--chakra-colors--motif)"}
      w={{
        base: "740px",
        smDown: "100%",
        sm: "100%",
        smToMd: "100%",
        md: "100%",
        mdToLg: "100%",
        lg: "100%",
        lgToXl: "100%",
        xl: "740px",
        xlTo2xl: "740px",
        "2xl": "740px",
      }}

      rounded={"2xl"}
      overflow={"clip"}
      bg={"transparent"}
    >
      <Promo data={SlideData} />
    </Box>
  );
}
export default Banner