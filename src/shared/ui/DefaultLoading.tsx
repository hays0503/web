import { JSX } from "@emotion/react/jsx-runtime";
import { memo } from "react";

const DefaultLoading: React.FC = (): JSX.Element => {
	return <div>DefaultLoading...</div>;
};

export default memo(DefaultLoading);
