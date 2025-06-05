import { memo } from "react";
import RecipientForm from "./RecipientForm/RecipientForm";
import { Flex } from "@chakra-ui/react";

const CreateOrder = () => {
	return (
		<Flex width={"100%"} justify={"center"}>
			<Flex
				width={"85%"}
				justify={"center"}
				p={"10px"}
			>
				<RecipientForm />
			</Flex>
		</Flex>
	);
};

export default memo(CreateOrder);
