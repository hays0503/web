import { Button } from "@chakra-ui/react"


const ProductBuyOneClick: React.FC<{ onQuickBuy?: () => void }> = ({
  onQuickBuy,
}) => {
  return (
    <Button
      transition="all 0.3s ease"
      _hover={{
        bg: "Motif",
        color: "WhiteAndBlack",
      }}
      variant="outline"
      border={"1px solid var(--chakra-colors--motif)"}
      color={"Motif"}
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