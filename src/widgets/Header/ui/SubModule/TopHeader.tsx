"use client";

import { Flex, Group } from "@chakra-ui/react";

interface TopHeaderProps {
	readonly ChangeCity: React.ReactNode;
	readonly ChangeLang: React.ReactNode;
	readonly NavigationLinks: React.ReactNode;
}

export default function TopHeader({
	ChangeCity,
	ChangeLang,
	NavigationLinks,
}: TopHeaderProps) {
	return (
		<Flex
			wrap={"wrap"}
			justify={"space-between"}
			align={"center"}
			w={{
        base: "85%",
        smDown: "100%",
      }}
			bg="Header.Top.Background"
			color="Header.Top.ColorText"
		>
			<Group gap={1}>
				{ChangeCity}
				{ChangeLang}
			</Group>
			{NavigationLinks}
		</Flex>
	);
}
