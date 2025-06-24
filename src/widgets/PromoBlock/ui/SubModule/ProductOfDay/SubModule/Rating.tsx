import { ProductType } from "@/widgets/PromoBlock/type/Promo";
import { HStack, Group, Icon, Text } from "@chakra-ui/react";
import { IoIosStar } from "react-icons/io";


const Rating: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
      <HStack w={"100%"} justify={"flex-start"}>
        <Group gap={1}>
          <Icon as={IoIosStar} color={"Motif"} size={"xl"} />
          <Text textStyle={"xl"} fontWeight={500} color={"Motif"}>
            {product.rating}
          </Text>
        </Group>
        <Text textStyle={"xs"}>10 отзывов</Text>
      </HStack>
    );
}

export default Rating;  