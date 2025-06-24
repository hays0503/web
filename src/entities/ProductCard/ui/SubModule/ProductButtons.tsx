import { HStack, Icon } from "@chakra-ui/react"
import { FaBalanceScale, FaCartPlus, FaHeart } from "react-icons/fa"


const ProductButtons: React.FC = () => {
    return  <HStack justify="space-around" color="Motif" fontSize="sm" w={"100%"}>
              <Icon as={FaCartPlus} boxSize={7} />
              <Icon as={FaHeart} boxSize={7} />
              <Icon as={FaBalanceScale} boxSize={7} />
            </HStack>
}

export default ProductButtons;