"use client";
import { memo, ReactNode, useEffect, useState } from "react";
import { Box, Button, Flex, Group, Kbd, Text } from "@chakra-ui/react";

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
	useEffect(() => {
		const handleKeyUp = () => {
			setShowHint(!showHint);
		};

		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [showHint]);
	return (
		<div
			style={{
				width: "100%",
				height: "5000px",
				overflowY: "auto",
				overflowX: "clip",
				position: "absolute",
				backgroundOrigin: "content-box",
				backgroundPositionX: "center",
				backgroundImage: showHint
					? `
          url('/layoutImg/${LayoutImage}'),
					repeating-linear-gradient(
						-60deg,
						#555 0,
						#555 1px,
						transparent 1px,
						transparent 5px
					)
					
				`
					: "unset",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Group
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
				<Text mr={"10px"}>
					Просмотр макета: <Kbd fontSize={16}>ctrl</Kbd>
				</Text>
				<Button color={showHint ? "green" : "red"} variant="surface" size="xs" rounded="full" pt={'0px'} pb={'0px'} h={'21px'} onClick={
          ()=>setShowHint(!showHint)
        }>
					{showHint ? "Вкл" : "Выкл"}
				</Button>
			</Group>
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
		</div>
	);
}

export default memo(LayoutTemp);
