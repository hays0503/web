import {
	Button,
	Flex,
	Grid,
	GridItem,
	Group,
	Icon,
	Input,
	InputGroup,
	Link,
	Text,
} from "@chakra-ui/react";
import {
	LuSearch,
	LuUserRound,
} from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { MdOutlineBalance } from "react-icons/md";
import { default as NextImage } from "next/image";
import { ReactNode } from "react";

const ButtonIconWithText: React.FC<{ text: string; icon: ReactNode }> = ({
  text,
  icon,
}) => {
  return (
    <Button
      asChild
      variant={"plain"}
      p={"0"}
      color={"Header.Center.Buttons.Login.Color"}
      bg={"Header.Center.Buttons.Background"}
      rounded={"full"}
      h={"70px"}
    >
      <Flex
        minW={"70px"}
        w={"auto"}
        h={"100%"}
        flexDirection={{
          smDown: "column",
          sm: "column",
          smToMd: "column",
          base: "row",
        }}
        alignItems={"center"}
        pl={"10px"}
        pr={"10px"}
        pb={"5px"}
        pt={"5px"}
        gap={0}
      >
        <Icon
          color={"Header.Center.Buttons.Balance.Color"}
          bg={"Header.Center.Buttons.Balance.Background"}
          rounded={"full"}
          size={"2xl"}
          p={1}
          w={"50px"}
          h={"50px"}
        >
          {icon}
        </Icon>
        <Text
          color={"Header.Center.Buttons.Color"}
          paddingBottom={"5px"}
          lineHeight={"1"}
        >
          {text}
        </Text>
      </Flex>
    </Button>
  );
};

const CenterHeader = () => {
	return (
    <Flex
      w={"69%"}
      gap={"20px"}
      minH={"70px"}
      wrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg="Header.Center.Background"
    >
      <Flex
        w={{
          smDown: "100%",
          sm: "100%",
          smToMd: "25%",
          md: "25%",
          mdToLg: "21%",
          lg: "15%",
          lgToXl: "15%",
          xl: "15%",
          xlTo2xl: "15%",
          "2xl": "11.5%",
        }}
        h={"70px"}
        rounded={"full"}
        bg={"Header.Center.TextAndInput.Background"}
        p={"5px 10px"}
        justifySelf={"stretch"}
        alignSelf={"stretch"}
      >
        <Link
          href={"/"}
          p={1}
          bg={"Header.Center.TextAndInput.Background"}
          color={"Header.Center.TextAndInput.SCKText"}
          rounded={"full"}
          position={"relative"}
          h={"100%"}
          w={"100%"}
        >
          <NextImage src="/logo/logo.svg" alt="Logo" fill objectFit="contain" />
        </Link>
      </Flex>

      <Flex
        w={{
          smDown: "100%",
          sm: "100%",
          smToMd: "68%",
          md: "50%",
          mdToLg: "75%",
          lg: "28%",
          lgToXl: "31%",
          xl: "25%",
          xlTo2xl: "35%",
          "2xl": "29.9%",
        }}
        rounded={"full"}
        bg={"Header.Center.TextAndInput.Background"}
        p={"0px 10px"}
        h={"70px"}
        justifySelf={"stretch"}
        alignSelf={"stretch"}
      >
        <InputGroup
          w={"full"}
          h={"100%"}
          rounded={"full"}
          p={0}
          endElement={
            <Button
              aria-label="Search"
              bg={"Header.Center.TextAndInput.SCKText"}
              color={
                "Header.Center.TextAndInput.InputSearch.IconSearchButton.Color"
              }
              h={"80%"}
              w={"60px"}
              borderRadius={"full"}
              variant={"plain"}
              rounded={"full"}
              padding={0}
              border={"none"}
            >
              <LuSearch style={{ width: "50%", height: "50%" }} />
            </Button>
          }
          endElementProps={{
            paddingInline: 0,
            margin: "-0.5px",
          }}
        >
          <Input
            flex={1}
            placeholder="Умный поиск"
            name="search"
            bg={"Header.Center.TextAndInput.InputSearch.Background"}
            color="Header.Center.TextAndInput.InputSearch.Color"
            _placeholder={{
              color: "Header.Center.TextAndInput.InputSearch.Color",
            }}
            minW={100}
            h={"80%"}
            w={"100%"}
            rounded={"full"}
            variant={"subtle"}
          />
        </InputGroup>
      </Flex>

      <Flex
        direction={"row"}
        w={{
          smDown: "100%",
          sm: "100%",
          smToMd: "100%",
          md: "100%",
          mdToLg: "100%",
          lg: "40%",
          lgToXl: "48%",
          xl: "35%",
          xlTo2xl: "45%",
          "2xl": "54.9%",
        }}
        justify={"space-evenly"}
        align={"center"}
        bg={"Header.Center.Buttons.Background"}
        rounded={{ base: "full", smDown: "none" }}
        wrap={"wrap"}
      >
        <ButtonIconWithText text="Войти" icon={<LuUserRound />} />
        <ButtonIconWithText text="Сравнить" icon={<MdOutlineBalance />} />
        <ButtonIconWithText text="Избранное" icon={<IoHeartOutline />} />
        <ButtonIconWithText text="Корзина" icon={<RiShoppingBasket2Line />} />
      </Flex>

    </Flex>
  );
};
export default CenterHeader;
