"use client";

import {
	Box,
	Button,
	Flex,
	Input,
	Text,
	Link,
	Group,
	Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { withMask } from "use-mask-input";

const RecipientForm = () => {
	const [formData, setFormData] = useState({
		lastName: "",
		firstName: "",
		phone: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = () => {
		console.log("Данные формы:", formData);
	};

	return (
		<Box w={"100%"} bg="#f5f5f5" fontFamily="body">
			<Box
				w={"100%"}
				mx="auto"
				bg="white"
				borderRadius="8px"
				boxShadow="sm"
				overflow="hidden"
			>
				<Flex
					align="center"
					justify="space-between"
					px="24px"
					py="20px"
					borderBottom="1px solid #e0e0e0"
				>
					<Text fontSize="20px" fontWeight="500" color="#333">
						Получатель
					</Text>
				</Flex>

				<Box p="24px">
					{/* Строка полей */}
					<Flex gap="16px" mb="24px" align="stretch" flexWrap="wrap">
						<Box flex="1" minW="200px">
							<Text fontSize="14px" color="#666" mb="6px">
								Фамилия
							</Text>
							<Input
								name="lastName"
								placeholder="Фамилия"
								bg="#f8f8f8"
								borderColor="#e0e0e0"
								borderRadius="4px"
								px="16px"
								py="12px"
								fontSize="14px"
								_focus={{
									borderColor: "#0066cc",
									bg: "white",
								}}
								value={formData.lastName}
								onChange={handleChange}
							/>
						</Box>

						<Box flex="1" minW="200px">
							<Text fontSize="14px" color="#666" mb="6px">
								Имя
							</Text>
							<Input
								name="firstName"
								placeholder="Имя"
								bg="#f8f8f8"
								borderColor="#e0e0e0"
								borderRadius="4px"
								px="16px"
								py="12px"
								fontSize="14px"
								_focus={{
									borderColor: "#0066cc",
									bg: "white",
								}}
								value={formData.firstName}
								onChange={handleChange}
							/>
						</Box>

						<Box flex="1" maxW="280px">
							<Text fontSize="14px" color="#666" mb="6px">
								Телефон
							</Text>
							<Group attached>
								<Flex
									w={"100px"}
									h={"40px"}
									justify={"center"}
									align={"center"}
									direction={"row"}
									wrap={"wrap"}
									border={"1px solid #e0e0e0"}
									position={"relative"}
									borderRadius={"4px 0 0 4px"}
								>
									<Image
										src="/iconKZ/kz.png"
										alt="kz"
										h={"40px"}
										fit="contain"
										style={{
											borderRadius: "50%",
											backgroundColor: "#f4f0f0",
										}}
									/>
									<Text color="#333" fontSize="14px">
										+7
									</Text>
								</Flex>
								<Input
									type="tel"
									name="phone"
									bg="#f8f8f8"
									border="1px solid #e0e0e0"
									borderRadius="0 4px 4px 0"
									fontSize="14px"
									textAlign={"center"}
									verticalAlign={"center"}
									_focus={{
										borderColor: "#0066cc",
										bg: "white",
									}}
									ref={withMask("(999) 999-99-99")}
								/>
							</Group>
						</Box>
					</Flex>

					{/* Дисклеймер */}
					<Text fontSize="13px" color="#888" lineHeight="1.4" mb="24px">
						Добавляя получателя, вы принимаете условия{" "}
						<Link href="#" color="#0066cc">
							пользовательских соглашений
						</Link>{" "}
						и даёте согласие на обработку персональных данных согласно{" "}
						<Link href="#" color="#0066cc">
							политике конфиденциальности
						</Link>
						.
					</Text>

					{/* Кнопка */}
					<Flex justify="flex-end">
						<Button
							bg="#e0e0e0"
							color="#999"
							borderRadius="4px"
							px="24px"
							py="12px"
							fontSize="14px"
							fontWeight="normal"
							_hover={{ bg: "#d0d0d0" }}
							onClick={handleSubmit}
						>
							Сохранить
						</Button>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
};

export default RecipientForm;
