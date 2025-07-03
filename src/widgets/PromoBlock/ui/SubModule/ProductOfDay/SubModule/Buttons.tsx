import { Button, Flex, Group, Icon, Text } from "@chakra-ui/react"
import { MdShoppingCart } from "react-icons/md"


const Buttons: React.FC = () => {


    return (
      <Flex
        gap={"20px"}
        pb={{
          base:'0px',
          smDown:'35px'
        }}
        direction={{
          base: "column",
          smDown: "column",
          sm: "column",
          smToMd: "column",
          md: "row",
          mdToLg: "row",
          lg: "row",
          lgToXl: "row",
          xl: "column",
          xlTo2xl: "column",
          "2xl": "column",
        }}
      
      >
        <Button
          transition="all 0.3s ease"
          rounded="full"
          bg={"Motif"}
          w={"70%"}
          minW={"160px"}
          _hover={{
            scale: "0.95",
            filter: "brightness(0.9)",
          }}
        >
          <Group>
            <Icon as={MdShoppingCart} size={"md"} color={"WhiteAndBlack"} />
            <Text color={"WhiteAndBlack"} textStyle={"md"} fontWeight={"500"}>
              В корзину
            </Text>
          </Group>
        </Button>
        <Button
          transition="all 0.3s ease"
          rounded="full"
          color={"Motif"}
          variant="outline"
          w={"70%"}
          minW={"160px"}
          border={"1px solid var(--chakra-colors--motif)"}
          _hover={{
            bg: "Motif",
            color: "WhiteAndBlack",
          }}
        >
          <Text textStyle={"md"} fontWeight={"500"}>
            Купить в 1 клик
          </Text>
        </Button>
      </Flex>
    );
}

export default Buttons;