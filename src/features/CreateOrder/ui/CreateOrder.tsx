import { memo } from "react";
import RecipientForm from "./RecipientForm/RecipientForm";
import { Flex } from "@chakra-ui/react";
import MethodOfObtainingForm from "./MethodOfObtainingForm/MethodOfObtainingForm";

const CreateOrder = () => {
	return (
		<Flex width={"100%"} justify={"center"}>
			<Flex
				width={"85%"}
				justify={"center"}
				p={"10px"}
        direction={"column"}
        gap={"20px"}
			>
				<RecipientForm />
        <MethodOfObtainingForm />
			</Flex>
		</Flex>
	);
};

export default memo(CreateOrder);
