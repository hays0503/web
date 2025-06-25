import { LinkSCK } from "@/shared/ui";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";



export interface TabsCategoryType {
  readonly img: string;
  readonly text: string;
  readonly url: string;
}


const Category: React.FC<{item:TabsCategoryType}> = ({item}) => {
    return (
      <LinkSCK href={item.url}>
        <Box textAlign="center" w={"100%"} h={"100%"}>
          <Box
            w="100%"
            aspectRatio={1}
            minW="180px"
            minH="180px"
            bg="white"
            _dark={{ bg: "gray.900" }}
            borderRadius="2xl"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={item.img}
              alt={item.text}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Heading size="2xl" mt={2} fontSize="sm">
            {item.text}
          </Heading>
        </Box>
      </LinkSCK>
    );
} 
export default Category