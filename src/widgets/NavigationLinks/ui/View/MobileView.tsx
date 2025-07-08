import { IconButton, Link, Menu, Portal } from "@chakra-ui/react";
import { DataLinks } from "../../type/DataLinks";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LinkSCK } from "@/shared/ui";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileView:React.FC<{
	readonly toggleMenu:React.MouseEventHandler<HTMLButtonElement>,
	readonly isOpen:boolean,	
	readonly links:DataLinks
}> = ({toggleMenu,isOpen,links}) => {
	return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton
          aria-label="Открыть меню"
          variant="outline"
          display={{ base: "inline-flex", md: "none" }}
          onClick={toggleMenu}
          bg={'Motif'}
          color={'WhiteAndBlack'}
          rounded={'full'}
          focusRing={'none'}
        >
          {isOpen ? <IoCloseCircleOutline /> : <GiHamburgerMenu/>} 
        </IconButton>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {links.map((link) => (
              <Menu.Item key={link.href} asChild value={link.href}>
                <Link asChild>
                  <LinkSCK href={link.href}>{link.label}</LinkSCK>
                </Link>
              </Menu.Item>
            ))}
            {/* <Menu.Item value="Тема" justifyContent={"center"}>
              <ColorModeButton />
            </Menu.Item> */}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default MobileView;