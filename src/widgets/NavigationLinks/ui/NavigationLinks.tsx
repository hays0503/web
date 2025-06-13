"use client";

import { ColorModeButton, LinkSCK } from "@/shared/ui";
import { ErrorBoundaryLogger } from "@/shared/ui/ErrorBoundaryLogger";
import {
	Box,
	Flex,
	Group,
	IconButton,
	Image,
	Link,
	Menu,
	Portal,
	Text,
} from "@chakra-ui/react";
import { default as NextImage } from "next/image";

import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function NavigationLinks() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const links = [
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
		{ label: "Доставка", href: "delivery" },
		{ label: "Гарантии", href: "warranty" },
		{ label: "Оплата", href: "payment" },
		{ label: "Пункты выдачи", href: "pickup-points" },
		{ label: "Сотрудничество", href: "cooperation" },
		{ label: "+7 705 655 00 00", href: "tel:+7 705 655 00 00" },
	];

	return (
		<ErrorBoundaryLogger
			contextMessage="Ошибка на уровне NavigationLinks"
			fallbackUI={<div>Ошибка на уровне NavigationLinks</div>}
		>
			<Box as="nav">
				{/* Desktop */}
				<Flex display={{ base: "none", md: "flex" }} as="ol" gap={4}>
					{links.map((link) => (
						<Link as="li" asChild key={link.href}>
							<LinkSCK href={link.href}>{link.label}</LinkSCK>
						</Link>
					))}
					<ColorModeButton />
				</Flex>

				{/* Mobile toggle button */}
				<Menu.Root>
					<Menu.Trigger asChild>
						<IconButton
							aria-label="Открыть меню"
							variant="outline"
							display={{ base: "inline-flex", md: "none" }}
							onClick={toggleMenu}
							mt={2}
						>
							{isOpen ? <IoCloseCircleOutline /> : <FaHamburger />}
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
								<Menu.Item asChild value="Тема">
									<ColorModeButton />
								</Menu.Item>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu.Root>
			</Box>
		</ErrorBoundaryLogger>
	);
}
