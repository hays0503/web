import { Text } from "@chakra-ui/react";


const ProductName: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Text
      fontSize="0.81rem"
      lineClamp="2"
      mb={1}
      fontWeight="medium"
      textAlign="left"
      minH={"2.5rem"}
    >
      {title}
    </Text>
  );
};
export default ProductName