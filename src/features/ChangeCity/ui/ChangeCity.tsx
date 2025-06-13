"use client";
// import { ErrorBoundaryLogger } from "@/shared/ui/ErrorBoundaryLogger";
import { Button, Group, Icon, Text } from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";

export default function ChangeCity() {
	const fakeChange = async () => {
		alert("fake change city");
	};

	return (
      // <ErrorBoundaryLogger contextMessage="Ошибка на уровне ChangeCity" fallbackUI={<div>Ошибка на уровне ChangeCity</div>}>
			<Button
				onClick={fakeChange}
				variant="subtle"
				p={"0px 10px"}
				rounded="full"
				bg={"Header.Top.ChangeCity.Background"}
				size={"xs"}
				asChild
			>
				<Group gap={1}>
					<Icon as={ImLocation} color={"Header.Top.ChangeCity.LocationIcon"} />
					<Text color={"Header.Top.ChangeCity.ColorText"}>Петропавловск</Text>
				</Group>
			</Button>
      // </ErrorBoundaryLogger>
	);
}
