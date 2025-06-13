"use client";
import { Button, Group, Icon, Text } from "@chakra-ui/react";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { ErrorBoundaryLogger } from "@/shared/ui/ErrorBoundaryLogger";

export default function ChangeLang() {
	const fakeChange = () => {
		alert("fake change lang ");
	};
	return (
		<ErrorBoundaryLogger
			contextMessage="Ошибка на уровне ChangeLang"
			fallbackUI={<div>Ошибка на уровне ChangeLang</div>}
		>
			<Button
				onClick={fakeChange}
				variant="subtle"
				p={"0px 10px"}
				rounded="full"
				bg="Header.Top.ChangeLang.Background"
				size={"xs"}
			>
				<Group gap={1}>
					<Icon color={"Header.Top.ChangeLang.LangIcon"} as={MdLanguage} />
					<Text color={"Header.Top.ChangeLang.ColorText"}>Русский</Text>
					<Icon color={"Header.Top.ChangeLang.ColorText"} as={IoIosArrowDown} />
				</Group>
			</Button>
		</ErrorBoundaryLogger>
	);
}
