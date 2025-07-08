"use client";

import { ErrorBoundaryLogger } from "@/shared/ui/ErrorBoundaryLogger";
import {
	Flex,
	Group,
	Image,
	Text,
} from "@chakra-ui/react";
import { default as NextImage } from "next/image";

import { useEffect, useRef, useState } from "react";
import { DataLinks } from "../type/DataLinks";
import { DesktopView, MobileView } from "./View";

const links: DataLinks = [
	{
		label: (
			<Group gap={1}>
				<Image asChild alt="logo">
					<NextImage src="/logo/logo.svg" alt="logo" width={45} height={35} />
				</Image>
				<Text>SCK.Club</Text>
			</Group>
		),
		href: "club",
	},
	{ label: "Покупателям", href: "buyers" },
	{ label: "Полезная информация", href: "information" },
	{ label: "Сотрудничество", href: "cooperation" },
	{ label: "+7 705 655 00 00", href: "tel:+7 705 655 00 00" },
];

/**
 * Hook that runs a callback when clicking outside of the given ref
 */
function useOutsideAlerter(
  ref: React.RefObject<HTMLElement|null>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default function NavigationLinks() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

	return (
    <ErrorBoundaryLogger
      contextMessage="Ошибка на уровне NavigationLinks"
      fallbackUI={<div>Ошибка на уровне NavigationLinks</div>}
    >
      <Flex
        ref={wrapperRef}
        as="nav"
        w="full"
        justify={"flex-end"}
        align={"center"}
      >
        {/* Desktop */}
        <DesktopView links={links} />

        {/* Mobile */}
        <MobileView toggleMenu={toggleMenu} isOpen={isOpen} links={links} />
      </Flex>
    </ErrorBoundaryLogger>
  );
}



