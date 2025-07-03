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
import { BrandsBanner } from "@/widgets/BrandsBanner";
import { PromoBlock } from "@/widgets/PromoBlock";
import { TabsCategory } from "@/widgets/TabsCategory";
import { WeRecommend } from "@/widgets/WeRecommend";
import { VStack } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import SCK from "@/widgets/SCK";
import { UsefulInformation } from "@/widgets/UsefulInformation";
import { UpButton } from "@/widgets/UpButton/ui";

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
      id="#Main"
      // LayoutImage="MainCenter.webp"
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
      <VStack w={"100%"} gap={"60px"} mb={"60px"} mt={"20px"}>
        <PromoBlock />
        <TabsCategory />
        <WeRecommend />
        <Banner />
        <BrandsBanner />
        <SCK />
        <MaybeLikeIt />
        <UsefulInformation />
        <UpButton/>
      </VStack>
    </LayoutTemp>
  );
}
