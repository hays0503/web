"use client";

import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defineConfig,
} from "@chakra-ui/react";
import {
	ColorModeProvider,
	type ColorModeProviderProps,
} from "../../../shared/ui/ColorMode";
import theme from "@/shared/style/theme";
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
