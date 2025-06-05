"use client";

import React from "react";
import { useParams } from "next/navigation";
import CityContext from "./CityContext";

interface ProviderCityProps {
	children: React.ReactNode;
}

const ProviderCity: React.FC<ProviderCityProps> = ({ children }) => {
	const params = useParams();
	const cityEn =
		params && typeof params.cityEn === "string"
			? params.cityEn
			: Array.isArray(params?.cityEn)
			? params?.cityEn[0] || ""
			: "";

	return (
		<CityContext.Provider value={{ cityEn }}>{children}</CityContext.Provider>
	);
};

export default ProviderCity;
