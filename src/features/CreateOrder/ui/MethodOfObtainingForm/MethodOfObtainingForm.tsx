"use client";
import { useCityParams } from "@/shared/hooks";
import {
	Box,
	Flex,
	RadioGroup,
	SegmentGroup,
	Text,
	VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

const items = [
	{
		label: (
			<Flex gap={"10px"} justify={"center"} align={"center"}>
				<Text>Курьером SCK</Text>
				<Image
					src="/logo/logo.svg"
					alt="sck-delivery"
					width={100}
					height={50}
				/>
			</Flex>
		),
		value: "1",
	},
	{
		label: (
			<Flex gap={"10px"} justify={"center"} align={"center"}>
				<Text>CDEK</Text>
				<Image
					src="/logo/CDEK_logo.svg"
					alt="CDEK-delivery"
					width={100}
					height={50}
				/>
			</Flex>
		),
		value: "2",
	},
	{
		label: (
			<Flex gap={"10px"} justify={"center"} align={"center"}>
				<Text>Kazpost</Text>
				<Image
					src="/logo/Kazpost_Logo.svg"
					alt="Kazpost-delivery"
					width={100}
					height={50}
				/>
			</Flex>
		),
		value: "3",
	},
	{
		label: (
			<Flex gap={"10px"} justify={"center"} align={"center"}>
				<Text>EMS</Text>
				<Image
					src="/logo/EMS-Logo.png"
					alt="EMS-delivery"
					width={100}
					height={50}
				/>
			</Flex>
		),
		value: "4",
	},
];

const MethodOfObtainingForm = () => {
	const cityEn = useCityParams().cityEn;
	const [valueDelivery, setValueDelivery] = useState<string | null>("Доставка");
	const [valueService, setValueService] = useState<string | null>("");
	return (
		<Box w={"100%"} fontFamily="body">
			<Box
				w={"100%"}
				mx="auto"
				bg="white"
				borderRadius="8px"
				boxShadow="sm"
				overflow="hidden"
				_dark={{
					bg: "transparent",
					border: "1px solid var(--chakra-colors-gray-700)",
				}}
			>
				<Flex
					align="center"
					justify="space-between"
					px="24px"
					py="20px"
					borderBottom="1px solid #e0e0e0"
				>
					<Text
						fontSize="20px"
						fontWeight="500"
						color="#333"
						_dark={{ color: "white" }}
					>
						Способ получения
					</Text>
				</Flex>
				<Flex w={"100%"} direction={"column"} gap={"20px"} p={"20px"}>
					<Text>{cityEn}</Text>
					<Box
						display={{
							sm: "none", // ~480px
							md: "contents", // ~768px
							lg: "contents", // ~992px
							xl: "contents", // ~1280px
							"2xl": "contents", // ~1536px
						}}
					>
						<SegmentGroup.Root
							value={valueDelivery}
							onValueChange={(e) => setValueDelivery(e.value)}
							style={{ height: "50px" }}
							orientation="horizontal"
						>
							<SegmentGroup.Indicator
								style={{
									margin: "auto",
								}}
							/>
							<SegmentGroup.Items
								items={["Доставка", "Самовывоз"]}
								style={{
									margin: "auto",
									height: "50px",
									paddingLeft: "22.5%",
									paddingRight: "22.5%",
								}}
								// _checked={{
								// 	bg: "gray.800",
								// 	color: "white",
								// }}
							/>
						</SegmentGroup.Root>
					</Box>
					<Box
						display={{
							sm: "contents", // ~480px
							md: "none", // ~768px
							lg: "none", // ~992px
							xl: "none", // ~1280px
							"2xl": "none", // ~1536px
						}}
					>
						<SegmentGroup.Root
							value={valueDelivery}
							onValueChange={(e) => setValueDelivery(e.value)}
							style={{ height: "100px" }}
							orientation="vertical"
						>
							<SegmentGroup.Indicator
								style={{
									margin: "auto",
								}}
							/>
							<SegmentGroup.Items
								items={["Доставка", "Самовывоз"]}
								style={{
									// margin: "auto",
									height: "100px",
									// paddingLeft: "42%",
									// paddingRight: "45%",
								}}
								// _checked={{
								// 	bg: "gray.800",
								// 	color: "white",
								// }}
							/>
						</SegmentGroup.Root>
					</Box>
					<RadioGroup.Root
						value={valueService}
						onValueChange={(e) => setValueService(e.value)}
						w={"100%"}
					>
						<VStack gap="10" w={"100%"} align={"flex-start"}>
							{items.map((item) => (
								<RadioGroup.Item key={item.value} value={item.value}>
									<RadioGroup.ItemHiddenInput />
									<RadioGroup.ItemIndicator />
									<RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
								</RadioGroup.Item>
							))}
						</VStack>
					</RadioGroup.Root>
				</Flex>
			</Box>
		</Box>
	);
};
export default MethodOfObtainingForm;
