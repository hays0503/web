"use client";
// import { ErrorBoundaryLogger } from "@/shared/ui/ErrorBoundaryLogger";
import InputField from "@/shared/ui/InputField/InputField";
import {
	Box,
	Button,
	Flex,
	Text,
	Link,
	Image,
	Fieldset,
} from "@chakra-ui/react";
import React from "react";
// import { useErrorBoundary } from "react-error-boundary";
import { withMask } from "use-mask-input";

const RecipientForm = () => {
	// const { showBoundary } = useErrorBoundary();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			throw new Error("error agagag");
		} catch {
			// showBoundary(error);
		}
		console.log("Form submitted", e);
	};

	const textStyle = {
		fontSize: "13px",
		color: "#888",
		lineHeight: "16px",
		textAlign: "start",
		verticalAlign: "middle",
	};

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
						Получатель
					</Text>
				</Flex>

				<form onSubmit={handleSubmit}>
					<Fieldset.Root>
						<Flex direction="column" p="24px" gap={"16px"}>
							{/* Строка полей */}
							<Fieldset.Content>
								<Flex gap="1%" align="stretch" flexWrap="wrap">
									<InputField placeholder="Фамилия" name="lastName" />
									<InputField placeholder="Имя" name="firstName" />
									<InputField
										placeholder="Телефон"
										name="phone"
										ref={withMask("(999) 999-99-99")}
										startAddon={
											<Flex justify={"center"} align={"center"}>
												<Image
													src="/iconKZ/kz.png"
													alt="kz"
													h={"40px"}
													fit="contain"
													borderRadius={"50%"}
												/>
												<Text color="gray.400" fontSize="14px">
													+7
												</Text>
											</Flex>
										}
									/>
								</Flex>
							</Fieldset.Content>

							<Flex
								justify={"space-between"}
								align={"flex-start"}
								gap={"5px"}
								direction={{
									smDown: "column",
									sm: "column",
									md: "row",
									lg: "row",
									xl: "row",
								}}
							>
								{/* Дисклеймер */}

								<Text {...textStyle}>
									Добавляя получателя, вы принимаете условия&nbsp;
									<Link href="#" color="#0066cc">
										пользовательских соглашений
									</Link>
									&nbsp; и даёте согласие на обработку персональных данных
									согласно&nbsp;
									<Link href="#" color="#0066cc">
										политике конфиденциальности.
									</Link>
								</Text>
								{/* Кнопка */}
								<Button
									w={{
										smDown: "100%",
										sm: "100%",
										md: "25%",
										lg: "25%",
										xl: "25%",
									}}
									bg="gray.300"
									color="gray.600"
									_dark={{
										bg: "gray.900",
										color: "white",
										_hover: { bg: "gray.800" },
									}}
									borderRadius="4px"
									px="24px"
									py="12px"
									fontSize="14px"
									fontWeight="normal"
									_hover={{ bg: "gray.200" }}
									type="submit"
								>
									Сохранить
								</Button>
							</Flex>
						</Flex>
					</Fieldset.Root>
				</form>
			</Box>
		</Box>
	);
};

export default RecipientForm;
