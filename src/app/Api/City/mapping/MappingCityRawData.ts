import { MappedCityType } from "../type";
import { rawCity } from "../type/rawTypeCity";

const getLocalizedName = (city: rawCity, lang: string): string => city?.additional_data?.[lang] ?? city.name_city;

const MappingCityRawData = (rawData: rawCity[]):{results:MappedCityType[]} => {
    const cities: MappedCityType[] = rawData.map((product: rawCity) => ({
        disabled:product.total_products === 0,
        ru: getLocalizedName(product, 'ru'),
        en: getLocalizedName(product, 'en'),
        kk: getLocalizedName(product, 'kk'),
    }));

    return {
        results:cities
    }
};

export default MappingCityRawData