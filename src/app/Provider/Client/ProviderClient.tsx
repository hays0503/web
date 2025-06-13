import { Provider } from "@/app/Provider/Client/ProviderChakra";
import { JSX } from "@emotion/react/jsx-runtime";
import { memo } from "react";
import ProviderCity from "./ProviderCity/ProviderCity";

interface ProviderClientProps {
	children: React.ReactNode;
}

const ProviderClient: React.FC<ProviderClientProps> = ({
	children,
}): JSX.Element => {
	return (
		<Provider>
			<ProviderCity>{children}</ProviderCity>
	  </Provider>
	);
};

export default memo(ProviderClient);
