import { HStack, Icon, IconProps } from "@chakra-ui/react"
import { FaBalanceScale, FaCartPlus, FaHeart } from "react-icons/fa"


const props: IconProps = {
  transition: "all 0.3s ease",
  border: "1px solid var(--chakra-colors--motif)",
  bg: "Motif",
  color: "WhiteAndBlack",
  _hover: {
    bg: "WhiteAndBlack",
    color: "Motif",
  },
  rounded: "15px",
  p: "5px",
  boxSize: 7,
};

const ProductButtons: React.FC = () => {
    return (
      <HStack justify="space-around" fontSize="sm" w={"100%"}>
        <Icon as={FaCartPlus}  {...props} w={"20%"}/>
        <Icon as={FaHeart} {...props} w={"20%"}/>
        <Icon as={FaBalanceScale} {...props} w={"20%"}/>
      </HStack>
    );
}

export default ProductButtons;