import { Box } from "@chakra-ui/react";
import { SlideType } from "../type/Promo";
import { Promo } from "./SubModule";

const SlideData: SlideType[] = [
  {
    title:"",
    description:"",
    image: "/promo/promoSlide4.webp",
  },
  {
    title: "",
    description:"",
    image: "/promo/promoSlide4.webp",
  },
];


const Banner:React.FC = () => {
  return (
    <Box
      border={"1px solid var(--chakra-colors--motif)"}
      // w={{
      //   smDown: "100%",
      //   sm: "100%",
      //   smToMd: "100%",
      //   md: "100%",
      //   mdToLg: "100%",
      //   lg: "100%",
      //   lgToXl: "64%",
      //   xl: "64%",
      //   xlTo2xl: "64%",
      //   "2xl": "64%",
      // }}
      w={"800px"}
      rounded={"2xl"}
      overflow={"clip"}
      bg={'transparent'}
    >
      <Promo data={SlideData} />
    </Box>
  );
}
export default Banner