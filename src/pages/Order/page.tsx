"use server";
// import { ProviderClient } from "@/app/Provider";
import { ChangeCity } from "@/features/ChangeCity";
import { ChangeLang } from "@/features/ChangeLang";
import { CreateOrder } from "@/features/CreateOrder/ui";
import { DefaultLoading } from "@/shared/ui/DefaultLoading";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { LayoutMain } from "@/widgets/LayoutMain";
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

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default async function OrderPage() {
  const data = await sleep(1000);
  return (
			<LayoutMain
				Header={
					<Header
						ChangeCity={
							<Suspense
								fallback={
									<DefaultLoading info="ChangeLang" w="20px" h="20px" />
								}
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
        <Suspense fallback={<DefaultLoading info="CreateOrder" />}>
          <span>{JSON.stringify(data)}</span>
        </Suspense>
				<Suspense fallback={<DefaultLoading info="CreateOrder" />}>
					<CreateOrder />
				</Suspense>
			</LayoutMain>
	);
}
