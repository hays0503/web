"use client";
import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

type LayoutMainProps = {
	children: ReactNode;
	readonly Header: React.ReactNode;
	readonly Footer: React.ReactNode;
};

function LayoutMain({ children, Header, Footer }: LayoutMainProps) {
	return (
		<Flex
			direction="column"
			minH="100vh"
			w="100dvw"
			bg="Body.Background"
			color="Body.ColorText"
		>
			{/* Header */}
			<Box as="header">{Header}</Box>

			{/* Content */}
			<Box as="main" bg="Content.Background" color="Content.ColorText">
				{children}
			</Box>

			{/* Footer */}
			<Box
				as="footer"
				bg="Footer.Background"
				color={"Footer.ColorText"}
				p={4}
				textAlign="center"
			>
				{Footer}
			</Box>
		</Flex>
	);
}

export default LayoutMain;
