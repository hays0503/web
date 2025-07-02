"use server";
import { VStack } from "@chakra-ui/react";
import TopHeader from "./SubModule/TopHeader";
import CenterHeader from "./SubModule/CenterHeader";
import BottomHeader from "./SubModule/BottomHeader";

interface HeaderProps {
	readonly ChangeCity: React.ReactNode;
	readonly ChangeLang: React.ReactNode;
	readonly NavigationLinks: React.ReactNode;
}

export default async function Header({
	ChangeCity,
	ChangeLang,
	NavigationLinks,
}: HeaderProps) {
	return (
		<VStack w={"100%"} pt={'10px'} gap={'20px'}>
			<TopHeader
				ChangeCity={ChangeCity}
				ChangeLang={ChangeLang}
				NavigationLinks={NavigationLinks}
			/>
			<CenterHeader />
      		<BottomHeader />
		</VStack>
	);
}
