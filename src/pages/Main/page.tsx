"use server";
import { ChangeCity } from "@/features/ChangeCity";
import { ChangeLang } from "@/features/ChangeLang";
import { Banner } from "@/shared/ui/Banner";
import { DefaultLoading } from "@/shared/ui/DefaultLoading";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { LayoutTemp } from "@/widgets/LayoutTemp";
import { MaybeLikeIt } from "@/widgets/MaybeLikeIt";
import { NavigationLinks } from "@/widgets/NavigationLinks";
import { PopularBrands } from "@/widgets/PopularBrands";
import { PromoBlock } from "@/widgets/PromoBlock";
import { TabsCategory } from "@/widgets/TabsCategory";
import { WeRecommend } from "@/widgets/WeRecommend";
import { VStack } from "@chakra-ui/react";
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
    <LayoutTemp
      LayoutImage="MainCenter.webp"
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
      <VStack w={"100%"} gap={4}>
        <PromoBlock />
        <TabsCategory />
        <WeRecommend />
        <Banner />
        <PopularBrands />
        <MaybeLikeIt />
      </VStack>
    </LayoutTemp>
  );
}
