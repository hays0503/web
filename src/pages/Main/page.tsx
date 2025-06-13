"use server";
import { ChangeCity } from "@/features/ChangeCity";
import { ChangeLang } from "@/features/ChangeLang";
import { DefaultLoading } from "@/shared/ui/DefaultLoading";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { LayoutMain } from "@/widgets/LayoutMain";
import { LayoutTemp } from "@/widgets/LayoutTemp";
import { NavigationLinks } from "@/widgets/NavigationLinks";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

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
		<LayoutMain
			// LayoutImage="Main.webp"
			Header={
				<Header
					ChangeCity={
						<Suspense
							fallback={<DefaultLoading info="ChangeLang" w="20px" h="20px" />}
						>
							<ChangeCity />
						</Suspense>
					}
					ChangeLang={
						<Suspense fallback={<DefaultLoading info="ChangeLang" />}>
							<ChangeLang />
						</Suspense>
					}
					NavigationLinks={
						<Suspense fallback={<DefaultLoading info="NavigationLinks" />}>
							<NavigationLinks />
						</Suspense>
					}
				/>
			}
			Footer={<Footer />}
		>
      {""}
		</LayoutMain>
	);
}
