"use client";
import {
  Popover,
  Portal,
  VStack,
  Text,
  Box,
  Heading,
  Image,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Category, Data } from "./mock";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// =======================
// Анимации и обёртки
// =======================
const MotionBox = motion.create(Box);
const AnimatedColumn: React.FC<{
  children: React.ReactNode;
  keyId: string;
}> = ({ children, keyId }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={keyId}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ minWidth: "200px" }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

// =======================
// Повторно используемые компоненты
// =======================
const BoxWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box bg={"WhiteAndBlack"} rounded={"2xl"} p={3} minW={"245px"} maxW={"290px"}>
    {children}
  </Box>
);

const Item: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  isRoot?: boolean;
  icon?: string;
}> = ({ children, onClick, isActive, isRoot = false, icon }) => {
  return (
    <HStack
      onClick={onClick}
      onMouseEnter={onClick}
      px={2}
      py={1}
      borderRadius="md"
      gap={3}
      bg={isRoot && isActive ? "gray.100" : "transparent"}
      fontWeight={!isRoot && isActive ? "bold" : "normal"}
      _hover={{
        bg: isRoot ? "gray.100" : "gray.50",
        cursor: "pointer",
        boxShadow: "sm",
        transform: "translateX(2px)",
      }}
      transition="all 0.15s ease-in-out"
      minW="200px"
      maxW="250px"
    >
      {icon && <Image src={'/promo/icon.png'} boxSize="48px" borderRadius="md" alt={icon} />}
      <Text lineClamp={4}>{children}</Text>
    </HStack>
  );
};

// =======================
// Десктоп-меню
// =======================
const RootMenu = ({
  data,
  setHovered,
  activeSlug,
}: {
  data: Category[];
  setHovered: (slug: string) => void;
  activeSlug: string | null;
}) => (
  <BoxWrapper>
    <VStack
      align="start"
      gap={2}
      overflowX={"clip"}
      overflowY="auto"
      maxH="500px"
      css={{
        "&::-webkit-scrollbar": {
          width: "10px",
          scrollBehavior: "smooth",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "gray.100",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: ".8rem",
          backgroundColor: "Motif",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "Motif",
          filter: "brightness(0.9)",
        },
        "&::-webkit-scrollbar-thumb:active": {
          backgroundColor: "Motif",
          filter: "brightness(0.9)",
        },
      }}
    >
      {data.map((item: Category) => (
        <Item
          key={item.slug}
          onClick={() => setHovered(item.slug)}
          isActive={item.slug === activeSlug}
          isRoot
          icon={"/promo/icon.png"}
        >
          {item.name}
        </Item>
      ))}
    </VStack>
  </BoxWrapper>
);

const MenuWithTitle = ({
  title,
  count,
  data,
  setHovered,
  activeSlug,
}: {
  title: string;
  count: number;
  data: Category[];
  setHovered: (slug: string) => void;
  activeSlug: string | null;
}) => (
  <BoxWrapper>
    <Box
      overflowY="auto"
      overflowX={"clip"}
      maxH="500px"
      css={{
        "&::-webkit-scrollbar": {
          width: "10px",
          scrollBehavior: "smooth",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: 'gray.100',
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: ".8rem",
          backgroundColor: "Motif",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "Motif",
          filter: "brightness(0.9)",
        },
        "&::-webkit-scrollbar-thumb:active": {
          backgroundColor: "Motif",
          filter: "brightness(0.9)",
        },
      }}
    >
      <Box position="sticky" top="0" zIndex="1" bg="white" py={2} pr={2}>
        <HStack mb={2}>
          <Heading size="xs" fontWeight="800" color="gray.700" lineClamp={2}>
            {title}
          </Heading>
          <Text color="gray.500" fontSize="sm">
            ({count} товара)
          </Text>
        </HStack>
      </Box>
      <VStack align="start" gap={2}>
        {data.map((item) => (
          <Item
            key={item.slug}
            onClick={() => setHovered(item.slug)}
            isActive={item.slug === activeSlug}
          >
            {item.name}
          </Item>
        ))}
      </VStack>
    </Box>
  </BoxWrapper>
);

// =======================
// Мобильный слой
// =======================
const MobileLayer: React.FC<{
  title?: string;
  count: number;
  data: Category[];
  onBack?: () => void;
  onSelect: (item: Category) => void;
}> = ({ title, count, data, onBack, onSelect }) => (
  <MotionBox
    key={title}
    position="absolute"
    top={0}
    left={0}
    w="90dvw"
    h="100%"
    px={1}
    bg="white"
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ duration: 0.3 }}
    overflowY="auto"
    zIndex={10}
  >
    <HStack
      position="sticky"
      top={0}
      zIndex={1}
      bg="white"
      p={1}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      {onBack && (
        <IconButton aria-label="Назад" onClick={onBack} size="sm">
          <IoArrowBackCircleOutline />
        </IconButton>
      )}

      {title && (
        <Heading size="xs" fontWeight="bold" lineClamp={3}>
          {title}
          <Text fontSize="sm" color="gray.500" lineClamp={3}>
            ({count})
          </Text>
        </Heading>
      )}
    </HStack>
    <VStack align="start" gap={3}>
      {data.map((item) => (
        <HStack
          key={item.slug}
          px={2}
          py={1}
          borderRadius="md"
          _hover={{ bg: "gray.50", cursor: "pointer" }}
          onClick={() => onSelect(item)}
          //   w="full"
          maxW={"280px"}
        >
          {item.image && (
            <Image
              src={"/promo/icon.png"}
              boxSize="40px"
              borderRadius="md"
              alt={item.name}
            />
          )}
          <Text lineClamp={3}>{item.name}</Text>
        </HStack>
      ))}
    </VStack>
  </MotionBox>
);

// =======================
// Unified Component
// =======================
const CategoryMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [hoveredLevel1, setHoveredLevel1] = useState<string | null>(null);
  const [hoveredLevel2, setHoveredLevel2] = useState<string | null>(null);
  const [hoveredLevel3, setHoveredLevel3] = useState<string | null>(null);
  const [stack, setStack] = useState<Category[]>([]);

  const root = Data;
  const level1 = root.find((l1) => l1.slug === hoveredLevel1);
  const level2 = level1?.children || [];
  const level2Sel = level2.find((l2) => l2.slug === hoveredLevel2);
  const level3 = level2Sel?.children || [];
  const level3Sel = level3.find((l3) => l3.slug === hoveredLevel3);
  const level4 = level3Sel?.children || [];

  const renderDesktop = () => (
    <Box display="flex" gap={2}>
      <AnimatedColumn keyId="root">
        <RootMenu data={root} setHovered={setHoveredLevel1} activeSlug={hoveredLevel1} />
      </AnimatedColumn>
      {level2.length > 0 && (
        <AnimatedColumn keyId={`l2-${level1?.slug}`}>
          <MenuWithTitle
            title={level1?.name || ""}
            count={level2.length}
            data={level2}
            setHovered={setHoveredLevel2}
            activeSlug={hoveredLevel2}
          />
        </AnimatedColumn>
      )}
      {level3.length > 0 && (
        <AnimatedColumn keyId={`l3-${level2Sel?.slug}`}>
          <MenuWithTitle
            title={level2Sel?.name || ""}
            count={level3.length}
            data={level3}
            setHovered={setHoveredLevel3}
            activeSlug={hoveredLevel3}
          />
        </AnimatedColumn>
      )}
      {level4.length > 0 && (
        <AnimatedColumn keyId={`l4-${level3Sel?.slug}`}>
          <MenuWithTitle
            title={level3Sel?.name || ""}
            count={level4.length}
            data={level4}
            setHovered={() => {}}
            activeSlug={""}
          />
        </AnimatedColumn>
      )}
    </Box>
  );

  const renderMobile = () => {
    const current = stack[stack.length - 1];
    const currentData = current?.children || root;
    const pop = () => setStack((s) => s.slice(0, -1));
    const push = (item: Category) => item.children && setStack((s) => [...s, item]);

    return (
      <Box position="relative" w="80vw" h="80vw">
        <AnimatePresence mode="wait" initial={false}>
          <MobileLayer
            key={current?.slug || "root"}
            title={current?.name}
            count={currentData.length}
            data={currentData}
            onBack={stack.length ? pop : undefined}
            onSelect={push}
          />
        </AnimatePresence>
      </Box>
    );
  };

  return (
    <Popover.Root positioning={{ placement: "bottom-start" }}>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Portal>
        <Popover.Positioner zIndex={20}>
          <Popover.Content
            w={isMobile ? "90dvw" : "90dvw"}
            maxW="1200px"
            h={"100%"}
            // h={isMobile ? "auto" : "auto"}
            bg="Body.Background"
            p={0}
            overflow="hidden"            
            borderRadius={isMobile ? "none" : "md"}
            style={{
              transform: "translateX(-1px)",
            }}
          >
            <Popover.Body p={isMobile ? 0 : 4}>
              {isMobile ? renderMobile() : renderDesktop()}
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};

export default CategoryMenu;
