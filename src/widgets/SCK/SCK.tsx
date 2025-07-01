import { HeaderSCK } from "@/shared/ui"
import { Image, VStack } from "@chakra-ui/react"


const SCK = () => {
    return <VStack w={"100%"} gap={"10px"} justify={"flex-start"} align={"flex-start"} bg={"blue.500"}>
        <HeaderSCK>Стать Партнёром</HeaderSCK>
        <Image src="/promo/promoSlide8.webp" alt="promo" fit="contain" />
    </VStack>
}

export default SCK