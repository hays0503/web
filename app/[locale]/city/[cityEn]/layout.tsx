import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import "@/shared/style/globals.css";
import { Metadata } from "next";
import { getCity } from "@/app/Api/City";
import { MappedCityType } from "@/app/Api/City/type/MappedCity";
import { ResponseMappedCityType } from "@/app/Api/City/route/route";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export async function generateStaticParams(): Promise<
	{ cityEn: string; locale: string }[]
> {
	const locales = routing.locales; // ["en", "kk", "ru"]
	const citiesEnResponse = await getCity();

	if (citiesEnResponse.ok) {
		const citiesEn = (await citiesEnResponse.json()) as ResponseMappedCityType;

		if (citiesEn && citiesEn.results) {
			return citiesEn.results.flatMap((city: MappedCityType) =>
				locales.map((locale) => ({
					cityEn: city.en,
					locale,
				}))
			);
		}
	}

	return [];
}

export const metadata: Metadata = {
	title: "SCK",
	description: "SCK - дом начинается с нас !",
};

export const experimental_ppr = true;

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	// Enable static rendering
	setRequestLocale(locale);

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NextIntlClientProvider>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
