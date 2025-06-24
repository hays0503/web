import type { ThemeProviderProps } from "next-themes"
import type { IconButtonProps } from "@chakra-ui/react"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ColorModeProviderProps extends ThemeProviderProps {}

export type ColorMode = "light" | "dark"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}
