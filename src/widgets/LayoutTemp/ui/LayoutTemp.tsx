"use client";
import { memo, ReactNode, useEffect, useState } from "react";
import { Box, Button, Flex, Group, Kbd, Text, VStack } from "@chakra-ui/react";

type LayoutTempProps = {
	children: ReactNode;
	readonly Header: React.ReactNode;
	readonly Footer: React.ReactNode;
	readonly LayoutImage: string;
};

function LayoutTemp({
	children,
	Header,
	Footer,
	LayoutImage,
}: LayoutTempProps) {
	const [showHint, setShowHint] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const [showMain, setShowMain] = useState(true);
	const [showFooter, setShowFooter] = useState(true);
	useEffect(() => {
		const handleKeyUp = (event: KeyboardEvent) => {
			if (event.altKey) {
				switch (event.key) {
					case "2":
						setShowHeader((prev) => !prev);
						break;
					case "3":
						setShowMain((prev) => !prev);
						break;
					case "4":
						setShowFooter((prev) => !prev);
						break;
					case "1":
						setShowHint((prev) => !prev);
						break;
					default:
						break;
				}
			}
		};

		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [showHint]);
	return (
    <Box
      position="relative"
      w="100%"
      h="5000px"
      overflowX="clip"
      overflowY="auto"
    >
      <Box
        position="absolute"
        w="100%"
        h="100%"
        backgroundImage={`url('/layoutImg/${LayoutImage}')`}
		backgroundPositionX={"center"}
		backgroundRepeat={"no-repeat"}
        opacity={showHint ? 1 : 0}
        transition="opacity 0.8s ease"
        zIndex={2}
      />
      <Box
        position="absolute"
        w="100%"
        h="100%"
        backgroundImage={`repeating-linear-gradient(
      -60deg,
      #555 0,
      #555 1px,
      transparent 1px,
      transparent 5px
    )`}
        opacity={showHint ? 1 : 0}
        transition="opacity 0.8s ease"
        zIndex={1}
      />
      <VStack
        position="fixed"
        bottom="10%"
        left="4"
        bg="rgba(0,0,0,0.5)"
        color="white"
        px="3"
        py="1"
        borderRadius="md"
        fontSize="sm"
        zIndex="9999"
      >
        <Group>
          <Text mr={"10px"}>
            Просмотр макета:{" "}
            <Kbd fontSize={16}>
              Alt{"  "}+{"  "}1
            </Kbd>
          </Text>
          <Button
            color={showHint ? "green" : "red"}
            transition={"background-color 0.3s ease"}
            variant="surface"
            size="xs"
            rounded="full"
            pt={"0px"}
            pb={"0px"}
            h={"21px"}
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? "Вкл" : "Выкл"}
          </Button>
        </Group>
        <Group>
          <Text mr={"10px"}>
            Переключение заголовка:{" "}
            <Kbd fontSize={16}>
              Alt{"  "}+{"  "}2
            </Kbd>
          </Text>
          <Button
            color={showHeader ? "green" : "red"}
            transition={"background-color 0.3s ease"}
            variant="surface"
            size="xs"
            rounded="full"
            pt={"0px"}
            pb={"0px"}
            h={"21px"}
            onClick={() => setShowHeader(!showHeader)}
          >
            {showHeader ? "Вкл" : "Выкл"}
          </Button>
        </Group>
        <Group>
          <Text mr={"10px"}>
            Переключение контента:{" "}
            <Kbd fontSize={16}>
              Alt{"  "}+{"  "}3
            </Kbd>
          </Text>
          <Button
            color={showMain ? "green" : "red"}
            transition={"background-color 0.3s ease"}
            variant="surface"
            size="xs"
            rounded="full"
            pt={"0px"}
            pb={"0px"}
            h={"21px"}
            onClick={() => setShowMain(!showMain)}
          >
            {showMain ? "Вкл" : "Выкл"}
          </Button>
        </Group>
        <Group>
          <Text mr={"10px"}>
            Переключение подвала:{" "}
            <Kbd fontSize={16}>
              Alt{"  "}+{"  "}4
            </Kbd>
          </Text>
          <Button
            color={showFooter ? "green" : "red"}
            transition={"background-color 0.3s ease"}
            variant="surface"
            size="xs"
            rounded="full"
            pt={"0px"}
            pb={"0px"}
            h={"21px"}
            onClick={() => setShowFooter(!showFooter)}
          >
            {showFooter ? "Вкл" : "Выкл"}
          </Button>
        </Group>
      </VStack>
      <Flex
	  	position="absolute"
        direction="column"
        minH="100vh"
        w="100dvw"
        bg="Body.Background"
        color="Body.ColorText"
		zIndex={3}
      >
        {/* Header */}
        <Box
          as="header"
          opacity={showHeader ? 1 : 0}
          transition="opacity 0.3s ease"
        >
          {Header}
        </Box>

        {/* Content */}
        <Box
          as="main"
          bg="Content.Background"
          color="Content.ColorText"
          opacity={showMain ? 1 : 0}
          transition="opacity 0.3s ease"
        >
          {children}
        </Box>

        {/* Footer */}
        <Box
          as="footer"
          bg="Footer.Background"
          color={"Footer.ColorText"}
          p={4}
          textAlign="center"
          opacity={showFooter ? 1 : 0}
          transition="opacity 0.3s ease"
        >
          {showFooter && Footer}
        </Box>
      </Flex>
    </Box>
  );
}

export default memo(LayoutTemp);
