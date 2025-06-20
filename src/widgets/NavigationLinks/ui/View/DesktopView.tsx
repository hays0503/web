
import { ColorModeButton, LinkSCK } from "@/shared/ui";
import { DataLinks } from "../../type/DataLinks";
import { Box, Flex, IconButton, Link, Menu, Portal, Show, VStack } from "@chakra-ui/react";
import { useDynamicTextCalc } from "@/shared/hooks/useDynamicTextCalc";
import { useEffect, useMemo, useRef, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";

const DesktopView:React.FC<{
    readonly links:DataLinks
}> = ({links}) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Refs for dynamic text calculation
	const containerRef = useRef<HTMLDivElement>(null);
  const elementsMenu = useRef<HTMLDivElement>(null);
  const [reservedSpace, setReservedSpace] = useState<number>(40);

	const text = useMemo(() => links.map(link => link.label) as [string, ...string[]], [links]);

    const gap = useMemo(() => 10, []);

	const { visibleItems, hiddenItems } = useDynamicTextCalc({
    containerRef,
    text,
    gap: gap,
    reservedSpace: reservedSpace,
    font: {
      family: "Montserrat, Arial, sans-serif",
      size: "16px",
      weight: "400",
    },
  });

    useEffect(() => {
        setReservedSpace(elementsMenu.current?.offsetWidth ?? 40);
    },[visibleItems])

    return (
      <Flex
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="flex-end"
        w={"full"}
        gap={`${gap}px`}
        wrap={"nowrap"}
        whiteSpace={"nowrap"}
      >
        <Flex
          ref={containerRef}
          gap={`${gap}px`}
          alignItems="center"
          justifyContent="flex-end"
          w="full"
          as="ul"
          wrap={"wrap"}
          whiteSpace={"nowrap"}
        >
          {visibleItems.map((link, index) => (
            <Link as="li" asChild key={links[index].href}>
              <LinkSCK href={links[index].href}>{links[index].label}</LinkSCK>
            </Link>
          ))}
        </Flex>
        <Box ref={elementsMenu}>
          <Show when={hiddenItems.length > 0}>
            <Menu.Root onPointerDownOutside={() => setIsOpen(false)} open={isOpen}>
              <Menu.Trigger asChild>
                <IconButton
                  aria-label="Открыть меню"
                  variant="outline"
                  onClick={toggleMenu}
                  mt={2}
                >
                  {isOpen ? (
                    <IoCloseCircleOutline />
                  ) : (
                    <BiDotsHorizontalRounded />
                  )}
                </IconButton>
              </Menu.Trigger>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <VStack>
                      {hiddenItems.map((link, index) => (
                        <Link
                          as="li"
                          asChild
                          key={links[index + visibleItems.length].href}
                        >
                          <LinkSCK
                            href={links[index + visibleItems.length].href}
                          >
                            {links[index + visibleItems.length].label}
                          </LinkSCK>
                        </Link>
                      ))}
                    </VStack>
                    <Menu.Item asChild value="Тема">
                      <ColorModeButton />
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Show>
          <Show when={hiddenItems.length === 0}>
            <ColorModeButton />
          </Show>
        </Box>
      </Flex>
    );
}

export default DesktopView;	