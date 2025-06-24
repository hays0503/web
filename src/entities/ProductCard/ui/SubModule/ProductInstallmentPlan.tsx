import { PriceText } from "@/shared/ui";
import { Show, Text } from "@chakra-ui/react";

const ProductInstallmentPlan: React.FC<{
  installment?: { monthlyPayment: number; period: number };
}> = ({ installment }) => {
  return (
    <Show when={installment}>
      <Text textAlign="center" fontSize="xs" color="gray.600" mb={3}>
        В рассрочку
        <PriceText
          price={installment?.monthlyPayment ?? 0}
          as="span"
          fontWeight="bold"
          ml={1}
          bg={"SCKYellow"}
          rounded={"full"}
          p={1}
        />
        <Text as="span" fontWeight="bold" ml={1}>
          х {installment?.period} мес
        </Text>
      </Text>
    </Show>
  );
};

export default ProductInstallmentPlan