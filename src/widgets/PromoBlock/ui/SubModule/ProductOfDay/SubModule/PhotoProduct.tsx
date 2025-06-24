
import { ProductType } from "@/widgets/PromoBlock/type/Promo";
import { Flex, Image } from "@chakra-ui/react";

const PhotoProduct: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Flex
      position={"relative"}
      w={"100%"}
      h={"100%"}
      wrap={"wrap"}
      align={"center"}
      justify={"center"}
    >
      <Image src={product.image} h={"250px"} fit="contain" alt={product.name} />
    </Flex>
  );
}

export default PhotoProduct;