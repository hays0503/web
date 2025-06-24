import { Button, Group, Icon, Text } from "@chakra-ui/react"
import {Fragment} from "react"
import { MdShoppingCart } from "react-icons/md"


const Buttons: React.FC = () => {


    return (
      <Fragment>
        <Button rounded="full" bg={"Motif"} w={"80%"} minW={"180px"}>
          <Group>
            <Icon as={MdShoppingCart} size={"xl"} color={"WhiteAndBlack"} />
            <Text color={"WhiteAndBlack"} textStyle={"xl"}>
              В корзину
            </Text>
          </Group>
        </Button>
        <Button
          rounded="full"
          color={"Motif"}
          variant="outline"
          w={"80%"}
          minW={"180px"}
        >
          <Text color={"Motif"} textStyle={"xl"}>
            Купить в 1 клик
          </Text>
        </Button>
      </Fragment>
    );
}

export default Buttons;