import { ProductType } from "@/widgets/PromoBlock/type/Promo"
import { Box, Heading, Text, VStack } from "@chakra-ui/react"

const Cost: React.FC<{product: ProductType}> = ({ product }) => {
    return (
      <VStack w={"100%"} justify={"center"}>
        <Box position="relative" display="inline-block">
          <Text textStyle={"xs"} textAlign={"right"}>
            {product.discountPrice}₸
          </Text>
          <Box
            position="absolute"
            top="50%"
            left="0"
            width="100%"
            height="1px"
            bg="gray.800"
            transform="rotate(-12deg)"
            transformOrigin="center"
          />
        </Box>
        <Heading size={"xl"} color={"Motif"}>
          {product.price}₸
        </Heading>
      </VStack>
    );
}

export default Cost;