"use client";
import { useCityParams } from "@/shared/hooks";
import { ErrorBoundaryLogger } from "@/shared/ui/ErrorBoundaryLogger";
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

const deliveryOptions = [
	{ name: "Курьером SCK", logo: "logo.svg", alt: "sck-delivery", value: "1" },
	{ name: "CDEK", logo: "CDEK_logo.svg", alt: "CDEK-delivery", value: "2" },
	{ name: "Kazpost", logo: "Kazpost_Logo.svg", alt: "Kazpost-delivery", value: "3" },
	{ name: "EMS", logo: "EMS-Logo.png", alt: "EMS-delivery", value: "4" },
];

const renderLabel = (name: string, logo: string, alt: string) => (
	<Flex gap="10px" justify="center" align="center">
		<Text>{name}</Text>
		<Image src={`/logo/${logo}`} alt={alt} width={100} height={50} />
	</Flex>
);

const items = deliveryOptions.map(({ name, logo, alt, value }) => ({
	label: renderLabel(name, logo, alt),
	value,
}));

const MethodOfObtainingForm = () => {
	const cityEn = useCityParams().cityEn;
	const [valueDelivery, setValueDelivery] = useState<string | null>("Доставка");
	const [valueService, setValueService] = useState<string | null>("");
	return (
    <ErrorBoundaryLogger contextMessage="Ошибка на уровне MethodOfObtainingForm" fallbackUI={<div>Ошибка на уровне MethodOfObtainingForm</div>} >
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
							sm: "none", 
							md: "contents",
							lg: "contents",
							xl: "contents",
							"2xl": "contents",
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
							sm: "contents",
							md: "none", 
							lg: "none", 
							xl: "none", 
							"2xl": "none",
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
									height: "100px",
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
    </ErrorBoundaryLogger>
	);
};
export default MethodOfObtainingForm;
