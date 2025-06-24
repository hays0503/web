import { Button } from "@chakra-ui/react"


const ProductBuyOneClick: React.FC<{ onQuickBuy?: () => void }> = ({
  onQuickBuy,
}) => {
  return (
    <Button
      variant="outline"
      colorScheme="purple"
      size="sm"
      rounded="full"
      w="full"
      fontWeight="medium"
      fontSize="sm"
      mb={3}
      onClick={onQuickBuy}
    >
      Купить в 1 клик
    </Button>
  );
};
export default ProductBuyOneClick