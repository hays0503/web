import { ChangeCity } from "@/features/ChangeCity";
import { ChangeLang } from "@/features/ChangeLang";
import { Footer } from "@/widgets/Footer";
import LayoutMain from "@/widgets/LayoutMain/ui/LayoutMain";
import { NavigationLinks } from "@/widgets/NavigationLinks";
import { Text } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Metadata.HomePage" });

	return {
		title: t("title"),
		description: t("description"),
	};
}


const Content = () => {
	return (
		<Text>
			Главная
		</Text>
	);
};

export default async function HomePage() {
	return (
		<LayoutMain
			HChangeCity={<ChangeCity />}
			HChangeLang={<ChangeLang />}
			HNavigationLinks={<NavigationLinks />}
			Footer={<Footer />}
		>
			<Content />
		</LayoutMain>
	);
}
