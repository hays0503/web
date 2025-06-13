import { memo, Suspense } from "react";
import RecipientForm from "./RecipientForm/RecipientForm";
import { Flex } from "@chakra-ui/react";
import MethodOfObtainingForm from "./MethodOfObtainingForm/MethodOfObtainingForm";
import { DefaultLoading } from "@/shared/ui/DefaultLoading";

const CreateOrder = async () => {
	return (
		<Flex width={"100%"} justify={"center"}>
			<Flex
				width={"85%"}
				justify={"center"}
				p={"10px"}
				direction={"column"}
				gap={"20px"}
			>
				<Suspense fallback={<DefaultLoading info="RecipientForm" />}>
					<RecipientForm />
				</Suspense>

				<Suspense fallback={<DefaultLoading info="MethodOfObtainingForm" />}>
					<MethodOfObtainingForm />
				</Suspense>
			</Flex>
		</Flex>
	);
};

export default memo(CreateOrder);
