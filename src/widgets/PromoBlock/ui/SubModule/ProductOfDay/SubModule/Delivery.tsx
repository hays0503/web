import { Group, HStack, Icon, Text } from "@chakra-ui/react";
import { FaTruckFast } from "react-icons/fa6";


const Delivery: React.FC = () => {
  return (
    <HStack w={"100%"} justify={"flex-start"}>
      <Group gap={1}>
        <Icon as={FaTruckFast} color={"Motif"} size={"xl"} />
        <Text textStyle={"xs"}>Доставка завтра,бесплатно</Text>
      </Group>
    </HStack>
  );
}
export default Delivery;