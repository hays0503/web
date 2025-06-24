import { HStack, Show, Box, Group, Text } from "@chakra-ui/react";


interface TagsProps {
    readonly isHit:boolean;
    readonly bonusLabel?:string
}


const Tags:React.FC<TagsProps> = ({isHit,bonusLabel}) => {
    return (
      <HStack justify="space-between" align="center" minH={"40px"} w={"100%"}>
        <Show when={isHit}>
          <Box
            rounded={"full"}
            bg="SCKYellow"
            fontSize="xs"
            p={2}
            fontWeight={"bold"}
          >
            Хит продаж
          </Box>
        </Show>

        <Show when={bonusLabel}>
          <Group
            gap={1}
            alignItems="center"
            bg={"Motif"}
            color={"WhiteAndBlack"}
            rounded={"full"}
            px={3}
            py={1}
          >
            <Text color={"WhiteAndBlack"}>{bonusLabel}</Text>
            <Box
              position="relative"
              as="span"
              _before={{
                content: "''",
                position: "absolute",
                top: "0.2em",
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "WhiteAndBlack",
              }}
            >
              Б
            </Box>
          </Group>
        </Show>
      </HStack>
    );
}

export default Tags