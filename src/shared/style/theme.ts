import { SystemConfig } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
export const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin", "cyrillic"],
	display: "swap",
	fallback: ["Arial", "sans-serif"],
});

export const MainBackgroundColor = "colors.gray.100"; //MainBackgroundColor
export const MainBackgroundColorDark = "colors.gray.800"; //MainBackgroundColorDark
export const SCKYellow = "#FBD504";
export const MotifColor = { value: { base: "#a484dc", _dark: "white" } };
export const WhiteAndBlack = { value: { base: "white", _dark: "#2B2A29" } };
export const BlackAndWhite = { value: { base: "#2B2A29", _dark: "white" } };
export const MotifColorAndBlack = { value: { base: "#a484dc", _dark: "#2B2A29" } };
const theme: SystemConfig = {
	theme: {
		tokens: {
			fonts: {
				heading: {
					value: `Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
				},
				body: {
					value: `Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
				},
				mono: {
					value: `Montserrat,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
				},
			},
		},
		semanticTokens: {
			colors: {
				Motif:{
					...MotifColor
				},
				MotifColorAndBlack:{
					...MotifColorAndBlack
				},
				SCKYellow:{
					value:{base:SCKYellow, _dark:SCKYellow},
					description: "Цвет SCK Yellow",
				},
				WhiteAndBlack: {
					...WhiteAndBlack,
					description: "Белый и черный цвет",
				},
				BlackAndWhite: {
					...BlackAndWhite,
					description: "Черный и белый цвет",
				},
				Body: {
					Background: {
						value: {
							base: MainBackgroundColor,
							_dark: MainBackgroundColorDark,
						},
						description: "Главный фон страницы",
					},
					ColorText: {
						value: { base: "#555555", _dark: "#aaaaaa" },
						description: "Главный цвет текста",
					},
				},
				// Заголовок
				Header: {
					// Заголовок верхняя часть
					Top: {
						Background: {
							value: {
								base: MainBackgroundColor,
								_dark: MainBackgroundColorDark,
							},
							description: "Задний фон заголовка",
						},
						ButtonBackground: {
							value: { base: SCKYellow, _dark: SCKYellow },
							description: "Задний фон в кнопке которая есть в заголовке",
						},
						ButtonColorText: {
							value: { base: "#555555", _dark: "#000000" },
							description: "Заголовок цвет текста в кнопке",
						},
						ColorText: {
							value: { base: "#555555", _dark: "#aaaaaa" },
							description: "Заголовок цвет текста",
						},
						// Выбор города виджет
						ChangeCity: {
							LocationIcon: {
								...WhiteAndBlack,
								description: "Цвет иконки выбора города",
							},
							Background: {
								...MotifColor,
								description: "Задний фон кнопки выбора города",
							},
							ColorText: {
								...WhiteAndBlack,
								description: "Цвет текста кнопки выбора города",
							},
						},
						// Выбор языка виджет
						ChangeLang: {
							LangIcon: {
								...WhiteAndBlack,
								description: "Цвет иконки выбора языка",
							},
							Background: {
								...MotifColor,
								description: "Задний фон кнопки выбора языка",
							},
							ColorText: {
								...WhiteAndBlack,
								description: "Цвет текста кнопки выбора языка",
							},
						},
					},
					// Заголовок середина
					Center: {
						// Блок с текстом и полем поиска
						TextAndInput: {
							Background: {
								value: { base: SCKYellow, _dark: "colors.gray.600" },
								description: "Задний фон Блок с текстом и полем поиска",
							},
							SCKText: {
								value: { base: MotifColor.value.base, _dark: "white" },
								description: "Цвет текста SCK",
							},
							InputSearch: {
								Color: {
									value: { base: "#000000", _dark: "#000000" },
									description: "Цвет текста в поле поиска",
								},
								Background: {
									value: { base: "#fff", _dark: "#fff" },
									description: "Задний фон в поле поиска",
								},
								// Иконка поиска
								IconSearchButton: {
									Color: {
										value: { base: "#fff", _dark: "#fff" },
										description: "Задний фон в поле поиска",
									},
								},
							},
						},
						// Кнопки (Войти,Избранное,Корзина)
						Buttons: {
							Background: {
								...{ value: { ...MotifColor.value, _dark: "colors.gray.600" } },
								description: "Задний фон в поле поиска",
							},
							Color: {
								...WhiteAndBlack,
								description: "Задний фон в поле поиска",
							},
							Login: {
								Background: {
									...WhiteAndBlack,
									description: "Задний фон в поле поиска",
								},
								Color: {
									...MotifColor,
									description: "цвет внутри",
								},
							},
							Balance: {
								Background: {
									...WhiteAndBlack,
									description: "Задний фон в поле поиска",
								},
								Color: {
									...MotifColor,
									description: "Цвет внутри",
								},
							},
							Favorite: {
								Background: {
									...WhiteAndBlack,
									description: "Задний фон в поле поиска",
								},
								Color: {
									...MotifColor,
									description: "цвет внутри",
								},
							},
							Cart: {
								Background: {
									...WhiteAndBlack,
									description: "Задний фон в поле поиска",
								},
								Color: {
									...MotifColor,
									description: "Цвет внутри",
								},
							},
						},
					},
					// Заголовок Навигация
					Bottom: {
						BorderColor:{
							...MotifColor,
							description: "Навигация граница",
						},
						Background: {
							value: { base: "#ffffff", _dark: "#e6e6e6" },
							description: "Навигация фон",
						},
						ColorText: {
							...BlackAndWhite,
							description: "Навигация цвет текста",
						},
						Category: {
							Background: {
								...MotifColor,
								description: "Навигация фон",
							},
							ColorText: {
								...WhiteAndBlack,
								description: "Навигация цвет текста",
							},
						},
					},
				},
				// Контент страницы
				Content: {
					Background: {
						value: { base: "gray.900", _dark: "gray.900" },
						description: "Контент фон",
					},
					ColorText: {
						...BlackAndWhite,
						description: "Контент цвет текста",
					},
				},
				// Подвал
				Footer: {
					Background: {
						value: { base: "gray.900", _dark: "gray.900" },
						description: "Подвал фон",
					},
					ColorText: {
						...BlackAndWhite,
						description: "Подвал цвет текста",
					},
				},
			},
		},
	},
};
export default theme;
