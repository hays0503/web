import { NextResponse } from "next/server";
import { FetcherCity } from "../fetcher";
import { MappingCityRawData } from "../mapping";
import { MappedCityType } from "../type/MappedCity";

export type ResponseMappedCityType = {
	results: MappedCityType[];
} | null;



export async function GET(): Promise<NextResponse<ResponseMappedCityType>> {
	try {
		const response = await FetcherCity();
		if (response) {
			const mappedData: ResponseMappedCityType = MappingCityRawData(response);
			return NextResponse.json(mappedData, { status: 200 });
		}
    return NextResponse.json(null, { status: 404 });
	} catch {
		return NextResponse.json(null, { status: 500 });
	}
}
