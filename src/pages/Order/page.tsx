"use server";
import { ProviderClient } from "@/app/Provider";
import { ChangeCity } from "@/features/ChangeCity";
import { ChangeLang } from "@/features/ChangeLang";
import { CreateOrder } from "@/features/CreateOrder/ui";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { LayoutMain } from "@/widgets/LayoutMain";
import { NavigationLinks } from "@/widgets/NavigationLinks";
import { getTranslations } from "next-intl/server";

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

export default async function OrderPage() {
	return (
		<ProviderClient>
			<LayoutMain
				Header={
					<Header
						ChangeCity={<ChangeCity />}
						ChangeLang={<ChangeLang />}
						NavigationLinks={<NavigationLinks />}
					/>
				}
				Footer={<Footer />}
			>
				<CreateOrder />
			</LayoutMain>
		</ProviderClient>
	);
}
