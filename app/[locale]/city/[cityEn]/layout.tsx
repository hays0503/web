"use server";
import "@/shared/style/globals.css";
import { Metadata } from "next";
import { getCity } from "@/app/Api";
import { MappedCityType } from "@/app/Api/City/type/MappedCity";
import { ResponseMappedCityType } from "@/app/Api/City/route/route";



export async function generateStaticParams(): Promise<{ cityEn: string }[]> {
	const citiesEnResponse = await getCity();

	if (citiesEnResponse.ok) {
		const citiesEn = (await citiesEnResponse.json()) as ResponseMappedCityType;

		if (citiesEn && citiesEn.results) {
			const result = citiesEn.results.map((city: MappedCityType) => ({
				cityEn: city.en,
			}));
			return result;
		}
	}

	return [];
}

export const generateMetadata = async (): Promise<Metadata> => ({
	title: "SCK",
	description: "SCK - дом начинается с нас !",
});

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
}
export default Layout