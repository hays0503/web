"use client";

import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defineConfig,
} from "@chakra-ui/react";
import {
	ColorModeProvider,
} from "../../../shared/ui/ColorMode/ColorMode";
import theme from "@/shared/style/theme";
import { ColorModeProviderProps } from "@/shared/ui";
// import { EmotionCacheProvider } from "./EmotionCacheProvider";

const config = defineConfig(theme);

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
	return (
		// <EmotionCacheProvider>
			<ChakraProvider value={system}>
				<ColorModeProvider {...props} />
			</ChakraProvider>
		// </EmotionCacheProvider>
	);
}
