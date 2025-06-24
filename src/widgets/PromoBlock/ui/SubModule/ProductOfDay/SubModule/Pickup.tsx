import { Group, HStack, Icon, Text } from "@chakra-ui/react"
import { ImLocation } from "react-icons/im"


const Pickup:React.FC = () => {
return (
  <HStack w={"100%"} justify={"flex-start"}>
    <Group gap={1}>
      <Icon color={"Motif"} size={"xl"} as={ImLocation} />
      <Text textStyle={"xs"}>Самовызов, сегодня</Text>
    </Group>
  </HStack>
);
}

export default Pickup;