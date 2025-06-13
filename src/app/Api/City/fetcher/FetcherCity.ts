import { UrlApiWithDomainV1, UrlRevalidateV1 } from "@/shared/constants/url";
import { rawCity } from "../type/rawTypeCity";
import defaultFetcher from "@/shared/tools/defaultFetcher";
import { FetcherError } from "@/shared/tools/fetcherErrors";

const FetcherCity = async (): Promise<rawCity[]> => {
	const url = UrlApiWithDomainV1.getCities;

	try {
		const response = await defaultFetcher<rawCity[]>(url, {
			...UrlRevalidateV1.getCities,
			// cache:"force-cache"
		});
		return response;
	} catch (error) {
		console.error("FetcherCity error:", error);
		if (error instanceof FetcherError) {
			throw error; // Пробрасываем FetcherError дальше
		} else {
			throw new FetcherError(
				`Unexpected error during fetch from ${url}`,
				url,
				error
			); // Оборачиваем другие ошибки в FetcherError
		}
	}
};

export default FetcherCity;
