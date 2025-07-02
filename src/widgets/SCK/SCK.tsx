import { HeaderSCK } from "@/shared/ui"
import { Image, VStack } from "@chakra-ui/react"


const SCK = () => {
    return (
      <VStack
        w={"100%"}
        gap={"20px"}
        justify={"flex-start"}
        align={"flex-start"}
      >
        <HeaderSCK>Стать Партнёром</HeaderSCK>
        <Image src="/promo/promoSlide17.webp" alt="promo" fit="contain" />
      </VStack>
    );
}

export default SCK;