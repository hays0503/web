"use client";
import { memo, ReactNode, useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
// import LayoutLayers from "./LayoutLayers";

type LayoutTempProps = {
	children: ReactNode;
	readonly Header: React.ReactNode;
	readonly Footer: React.ReactNode;
	// readonly LayoutImage: string;
};

const HeaderPart: React.FC<{
  maxContentWidth: string;
  size: string;
  showHeader: boolean;
  Header: React.ReactNode;
}> = ({ size, maxContentWidth, showHeader, Header }) => {
  return (
    <Flex
      w={size}
      as="header"
      opacity={showHeader ? 1 : 0}
      transition="opacity 0.3s ease"
      justifyContent={"center"}
    >
      <Flex maxW={maxContentWidth} w={"full"} justifyContent={"center"}>
        {showHeader && Header}
      </Flex>
    </Flex>
  );
};

const MainPart: React.FC<{ 
  maxContentWidth: string;
  size: string;
  showMain: boolean,
  children: React.ReactNode
}> = ({size, maxContentWidth, showMain, children}) => {
  return (
    <Flex
      w={size}
      as="main"
      bg="Content.Background"
      color="Content.ColorText"
      opacity={showMain ? 1 : 0}
      transition="opacity 0.3s ease"
      justifyContent={"center"}
    >
      <Flex  maxW={maxContentWidth} w={"full"} justifyContent={"center"}>
        {children}
      </Flex>
    </Flex>
  );
}

const FooterPart: React.FC<{
  maxContentWidth: string; 
  showFooter: boolean,
  Footer: React.ReactNode
}> = ({maxContentWidth,showFooter, Footer}) => {
  return (
    <Flex
      as="footer"
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
      color={"Footer.ColorText"}
      p={4}
      textAlign="center"
      opacity={showFooter ? 1 : 0}
      transition="opacity 0.3s ease"
      justifyContent={"center"}
      w={"full"}
    >
      <Flex maxW={maxContentWidth} w={"full"} justifyContent={"center"}>
        {showFooter && Footer}
      </Flex>
    </Flex>
  );
}

const Main: React.FC<{
  maxContentWidth: string; 
  size: string; 
  showHeader: boolean, 
  showMain: boolean, 
  showFooter: boolean, 
  Header: React.ReactNode, 
  Footer: React.ReactNode, 
  children: React.ReactNode
}> = ({
  maxContentWidth,
  size,
  showHeader,
  showMain,
  showFooter,
  Header,
  Footer,
  children
}) => {
  return (
    <Flex
      position="absolute"
      direction="column"
      minH="100vh"
      w={"100%"}
      bg="Body.Background"
      color="Body.ColorText"
      align={"center"}
      zIndex={3}
      gap={2}
    >
      {/* Header */}
      <HeaderPart
        maxContentWidth={maxContentWidth}
        size={size}
        showHeader={showHeader}
        Header={Header}
      />

      {/* Content */}
      <MainPart
        maxContentWidth={maxContentWidth}
        size={size}
        showMain={showMain}
      >
        {children}
      </MainPart>

      {/* Footer */}
      <FooterPart
        maxContentWidth={maxContentWidth}
        showFooter={showFooter}
        Footer={Footer}
      />
    </Flex>
  );
}

const useLayoutSettings = () => {
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

  return { showHint, showHeader, showMain, showFooter, setShowHint, setShowHeader, setShowMain, setShowFooter };
}

function LayoutTemp({
	children,
	Header,
	Footer,
	// LayoutImage,
}: LayoutTempProps) {
  const Setting = useLayoutSettings();

  const size = '90%'
  const maxContentWidth = '1200px'

	return (
    <Box
      position="relative"
      w="100%"
      h="8000px"
      overflowX="clip"
      overflowY="auto"
    >
      {/* <LayoutLayers
        layoutImage={LayoutImage}
        size={size}
        showHint={Setting.showHint}
        showHeader={Setting.showHeader}
        showMain={Setting.showMain}
        showFooter={Setting.showFooter}
        setShowHint={Setting.setShowHint}
        setShowHeader={Setting.setShowHeader}
        setShowMain={Setting.setShowMain}
        setShowFooter={Setting.setShowFooter}
      /> */}
      <Main
        maxContentWidth={maxContentWidth}
        size={size}
        showHeader={Setting.showHeader}
        showMain={Setting.showMain}
        showFooter={Setting.showFooter}
        Header={Header}
        Footer={Footer}
      >
        {children}
      </Main>
    </Box>
  );
}

export default memo(LayoutTemp);
