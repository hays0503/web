"use client";
import { Button, Group, Icon, Text } from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";

export default function ChangeCity() {
	const fakeChange = () => {
		alert("fake change city");
	};
	return (
		<Button
			onClick={fakeChange}
			variant="subtle"
			p={"0px 10px"}
			rounded="full"
			bg={"Header.Top.ChangeCity.Background"}
      size={"xs"}
		>
			<Group gap={1}>
				<Icon as={ImLocation} color={"Header.Top.ChangeCity.LocationIcon"} />
				<Text color={"Header.Top.ChangeCity.ColorText"}>Петропавловск</Text>
			</Group>
		</Button>
	);
}
