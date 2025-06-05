import {
	Button,
	Flex,
	Grid,
	GridItem,
	Group,
	HStack,
	Icon,
	Input,
	InputGroup,
	Text,
	VStack,
} from "@chakra-ui/react";
import {
	LuSearch,
	LuUserRound,
} from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { RiShoppingBasket2Line } from "react-icons/ri";

const CenterHeader = () => {
	return (
		<Flex
			gap={5}
			wrap={"wrap"}
			w={"100%"}
			p={2}
			justify={"center"}
			align={"center"}
		>
			<Grid
				w={"85%"}
				minH={"70px"}
				templateColumns={"repeat(12, 1fr)"}
				justifyItems={"stretch"}
				alignItems={"center"}
				columnGap={2}
				rowGap={2}
			>
				<GridItem
					colSpan={{
						smDown: 12,
						sm: 12,
            smToMd: 12,
						md: 12,
            mdToLg: 6,
						lg: 7,
            lgToXl: 7,
						xl: 8,
            "xlTo2xl": 8,
						"2xl": 9,
					}}
				>
					<Flex
						rounded={"full"}
						bg={"Header.Center.TextAndInput.Background"}
						p={"5px 10px"}
					>
						<Button
							asChild
							p={1}
							h={"55px"}
							bg={"Header.Center.TextAndInput.Background"}
							color={"Header.Center.TextAndInput.SCKText"}
							rounded={"full"}
						>
							<HStack justify={"center"} align={""}>
								<Text fontWeight={"black"} fontSize={"5xl"} h={"25px"}>
									SCK
								</Text>
								<VStack
									alignItems="flex-start"
									justify={"center"}
									gap={0}
									lineHeight={"0.7rem"}
								>
									<Text>Sales</Text>
									<Text>Center of</Text>
									<Text>Kazakhstan</Text>
								</VStack>
							</HStack>
						</Button>

						<InputGroup
							w={"full"}
							rounded={"full"}
							p={0}
							endElement={
								<Button
									aria-label="Search database"
									bg={"Header.Center.TextAndInput.SCKText"}
									color={
										"Header.Center.TextAndInput.InputSearch.IconSearchButton.Color"
									}
									borderRadius={"full"}
									variant={"plain"}
									rounded={"full"}
									padding={0}
									border={"none"}
								>
									<LuSearch />
								</Button>
							}
							endElementProps={{
								paddingInline: 0,
								margin: "-0.5px",
							}}
						>
							<Input
								flex={1}
								placeholder="Умный поиск"
								name="search"
								bg={"Header.Center.TextAndInput.InputSearch.Background"}
								color="Header.Center.TextAndInput.InputSearch.Color"
								_placeholder={{
									color: "Header.Center.TextAndInput.InputSearch.Color",
								}}
								minW={100}
								rounded={"full"}
								variant={"subtle"}
							/>
						</InputGroup>
					</Flex>
				</GridItem>

				<GridItem
					colSpan={{
						smDown: 12,
						sm: 12,
            smToMd: 12,
						md: 12,
            mdToLg: 6,
						lg: 5,
            lgToXl: 5,
						xl: 4,
            "xlTo2xl": 4,
						"2xl": 3,
					}}
				>
					<Flex
						justify={"space-between"}
						rounded={"full"}
						bg={"Header.Center.Buttons.Background"}
						p={"13px 10px"}
            gap={0}
					>
						<Button variant={"plain"} asChild p={"0"}>
							<Group gap={1}>
								<Icon
									color={"Header.Center.Buttons.Login.Color"}
									bg={"Header.Center.Buttons.Login.Background"}
									rounded={"full"}
									size={"2xl"}
									p={1}
									w={"40px"}
									h={"40px"}
								>
									<LuUserRound />
								</Icon>
								<Text color={"Header.Center.Buttons.Color"}>Войти</Text>
							</Group>
						</Button>

						<Button variant={"plain"} asChild p={"0"}>
							<Group gap={1}>
								<Icon
									color={"Header.Center.Buttons.Favorite.Color"}
									bg={"Header.Center.Buttons.Favorite.Background"}
									rounded={"full"}
									size={"2xl"}
									p={1.5}
									w={"40px"}
									h={"40px"}
								>
									<IoHeartOutline />
								</Icon>
								<Text color={"Header.Center.Buttons.Color"}>Избранное</Text>
							</Group>
						</Button>

						<Button variant={"plain"} asChild p={"0"}>
							<Group gap={1}>
								<Icon
									color={"Header.Center.Buttons.Cart.Color"}
									bg={"Header.Center.Buttons.Cart.Background"}
									rounded={"full"}
									size={"2xl"}
									p={1.5}
									w={"40px"}
									h={"40px"}
								>
									<RiShoppingBasket2Line />
								</Icon>
								<Text color={"Header.Center.Buttons.Color"}>Корзина</Text>
							</Group>
						</Button>
					</Flex>
				</GridItem>
			</Grid>
		</Flex>
	);
};
export default CenterHeader;
