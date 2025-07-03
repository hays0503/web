"use client";

import { Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import CategoryMenu from "@/widgets/CategoryMenu/CategoryMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const categories = [
	"Все акции",
  "Сделано в Казахстане",
  "Рассочка 0-0-24",
  "Гарантия низкой цены"
];

const measureWidths = (): number[] => {
	const font = `14px 'sans-serif'}`;
	return categories.map((label) => {
		const span = document.createElement("span");
		span.style.visibility = "hidden";
		span.style.position = "absolute";
		span.style.whiteSpace = "nowrap";
		span.style.font = font;
		span.style.fontWeight = "400";
		span.innerText = label;
		document.body.appendChild(span);
		const width = span.offsetWidth;
		document.body.removeChild(span);
		return width;
	});
};

const BottomHeader: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [visibleItems, setVisibleItems] = useState<string[]>([]);
	const [hiddenItems, setHiddenItems] = useState<string[]>([]);

	const updateVisibility = useCallback(() => {
		if (!containerRef.current) return;
		const containerWidth = containerRef.current.offsetWidth;
		const itemWidths = measureWidths();
		const gap = 16;
		const reservedForMenu = 40;

		let total = 0;
		const visible: string[] = [];
		const hidden: string[] = [];

		for (let i = 0; i < categories.length; i++) {
			const next = itemWidths[i] + (i > 0 ? gap : 0);
			if (total + next + reservedForMenu < containerWidth) {
				total += next;
				visible.push(categories[i]);
			} else {
				hidden.push(categories[i]);
			}
		}

		setVisibleItems(visible);
		setHiddenItems(hidden);
	}, []);

	useEffect(() => {
		updateVisibility();
		const observer = new ResizeObserver(updateVisibility);
		observer.observe(containerRef.current!);
		return () => observer.disconnect();
	}, [updateVisibility]);

	return (
    <Flex
      w="100%"
      border={"1px solid"}
      borderColor={"Header.Bottom.BorderColor"}
      bg={"Header.Bottom.Background"}
      borderRadius="full"
      p="0"
      overflow="hidden"
      align="center"
      minH="40px"
    >
      <CategoryMenu>
      <Button
        bg="Header.Bottom.Category.Background"
        color="Header.Bottom.Category.ColorText"
        borderRadius="full"
        px="4"
        fontWeight="bold"
        flexShrink={0}
        style={{
          borderEndEndRadius: 0,
          borderStartEndRadius: 0,
        }}
        variant="subtle"
        border={"none"}
      >
        <Icon as={GiHamburgerMenu} />
        Каталог товаров
      </Button>
      </CategoryMenu>

      <HStack
        ml="4"
        flex="1"
        minW="0"
        justifyContent={"space-around"}
        ref={containerRef}
      >
        {visibleItems.map((label) => (
          <Text
            key={label}
            fontSize="sm"
            whiteSpace="nowrap"
            color="gray.700"
            transition="all 0.3s ease"
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
              scale: "0.95",
              filter: "brightness(0.9)",
            }}
          >
            {label}
          </Text>
        ))}

        {hiddenItems.length > 0 && (
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="ghost" size="sm" minW="auto" p={1}>
                <Icon as={BsThreeDots} boxSize={5} />
              </Button>
            </Menu.Trigger>
            <Menu.Positioner>
              <Menu.Content>
                {hiddenItems.map((label) => (
                  <Menu.Item
                    key={label}
                    value={label}
                    color={"Header.Bottom.ColorText"}
                  >
                    {label}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
        )}
      </HStack>
    </Flex>
  );
};

export default memo(BottomHeader);
