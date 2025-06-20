import {
	Button,
	Flex,
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
      // color={"Header.Center.Buttons.Login.Color"}
      // bg={"Header.Center.Buttons.Background"}
      h={"70px"}
    >
      <Flex
        // minW={"70px"}
        w={"fit-content"}
        h={"100%"}
        flexDirection={{
          smDown: "column", // screen < 480px
          sm: "column", // screen >= 480px
          smToMd: "column", // screen >= 640px
          md: "column", // screen >= 768px
          mdToLg: "column", // screen >= 1024px
          lg: "column", // screen >= 1280px
          lgToXl: "column", // screen >= 1440px
          xl: "row", // screen >= 1536px
          xlTo2xl: "row", // screen >= 1920px
          "2xl": "row", // screen >= 2560px
        }}
        alignItems={"center"}
        pl={"10px"}
        pr={"10px"}
        pb={"5px"}
        pt={"5px"}
        gap={1}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Icon          
          color={"Header.Center.Buttons.Balance.Color"}
          bg={"Header.Center.Buttons.Balance.Background"}
          rounded={"full"}
          minW={"40px"}
          maxW={"70px"}
          minH={"40px"}
          maxH={"70px"}
          p={1}
          // size={"2xl"}
          // p={1}
          // w={"50px"}
          // h={"50px"}
        >
          {icon}
        </Icon>
        <Text
          color={"Header.Center.Buttons.Color"}
          paddingBottom={{
            smDown: "5px", // screen < 480px
            sm: "5px", // screen >= 480px
            smToMd: "5px", // screen >= 640px
            md: "5px", // screen >= 768px
            base: "0px",
          }}
          lineHeight={"1"}
          fontSize={'0.7rem'}
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
      w={"100%"}
      gap={"10px"}
      minH={"70px"}
      wrap={{
        base: "nowrap",
        smDown: "wrap",
        sm: "wrap",
        smToMd: "wrap",
        md: "nowrap",
        mdToLg: "nowrap",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg="Header.Center.Background"
      direction={{
        base: "column",
        smDown: "column",
        sm: "column",
        smToMd: "row",
        md: "row",
        mdToLg: "row",
        lg: "row",
        lgToXl: "row",
        xl: "row",
        xlTo2xl: "row",
        "2xl": "row",
      }}
    >
      <Flex
        w={{
          smDown: "100%",
          base: "150px",
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
          <NextImage src="/logo/logo.svg" alt="Logo" fill />
        </Link>
      </Flex>

      <Flex
        w={{
          base: "full",
          smDown: "100%",
          smOnly: "62%",
          sm: "100%",
          // smToMd: "60%",
          md: "50%",
          mdToLg: "75%",
          lg: "28%",
          lgToXl: "full",
          xl: "full",
          xlTo2xl: "full",
          "2xl": "full",
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
        gap={2}
        pl={"10px"}
        pr={"10px"}
        w={{
          base: "fit-content",
          smDown: "100%",
          sm: "100%",
          smToMd: "100%",
          md: "100%",
          mdToLg: "fit-content",
          lg: "fit-content",
          lgToXl: "fit-content",
          xl: "fit-content",
          xlTo2xl: "fit-content",
          "2xl": "fit-content",
        }}
        justify={"space-evenly"}
        align={"center"}
        bg={"Header.Center.Buttons.Background"}
        rounded={"full"}
        wrap={"nowrap"}
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
