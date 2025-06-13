import { UrlApiWithDomainV1, UrlRevalidateV1 } from "@/shared/constants/url";
import { rawCity } from "../type/rawTypeCity";
import defaultFetcher from "@/shared/tools/defaultFetcher";

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
    // Здесь можно вернуть fallback-данные или пробросить ошибку
    throw error;
  }
};

export default FetcherCity;