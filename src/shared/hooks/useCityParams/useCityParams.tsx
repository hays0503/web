import CityContext from "@/app/Provider/Client/ProviderCity/CityContext";
import { useContext } from "react";

const useCityParams = () => {
	const context = useContext(CityContext);

	if (!context) {
		throw new Error("useCity must be used within a ProviderCity");
	}

  return context;
};

export default useCityParams