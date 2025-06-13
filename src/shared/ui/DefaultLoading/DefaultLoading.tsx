import { Box } from "@chakra-ui/react";
import "./DefaultLoading.css";

const DefaultLoading: React.FC<{
	info?: string;
	w?: string;
	h?: string;
  bw?: string;
}> = ({ info, w, h,bw }) => {
	if (info) {
		// console.log(`DefaultLoading: ${info}`);
	} else {
		// console.log(`DefaultLoading: no info`);
	}
	return (
		<Box
			style={
				{
          width: w ? w : "48px",
          height: h ? h : "48px",
          position: "relative",
          "--loader-border-width": bw ? bw : "3px",
					"--loader-width": w ? w : "48px",
					"--loader-height": h ? h : "48px",
				} as React.CSSProperties
			}
		>
			<span className="loader"></span>
		</Box>
	);
};

export default DefaultLoading;
