const SCKYellow = "#FBD504";
const MotifColor = { value: { base: "#593795", _dark: "black" } };

const theme = {
	theme: {
		semanticTokens: {
			colors: {
				Body: {
					Background: {
						value: { base: "#f2f2f2", _dark: "black" },
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
							value: { base: "#f2f2f2", _dark: "#0d0d0d" },
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
								...MotifColor,
								description: "Цвет иконки выбора города",
							},
							Background: {
								value: { base: "#e0e0e0", _dark: "#e0e0e0" },
								description: "Задний фон кнопки выбора города",
							},
							ColorText: {
								value: { base: "#373638", _dark: "#000000" },
								description: "Цвет текста кнопки выбора города",
							},
						},
						// Выбор языка виджет
						ChangeLang: {
							LangIcon: {
								...MotifColor,
								description: "Цвет иконки выбора языка",
							},
							Background: {
								value: { base: "#e0e0e0", _dark: "#e0e0e0" },
								description: "Задний фон кнопки выбора языка",
							},
							ColorText: {
								value: { base: "#373638", _dark: "#000000" },
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
								...MotifColor,
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
								...{value:{...MotifColor.value,_dark:"colors.gray.600"}},
								description: "Задний фон в поле поиска",
							},
							Color: {
								value: { base: "#fff", _dark: "#fff" },
								description: "Задний фон в поле поиска",
							},
							Login: {
								Background: {
									value: { base: "#fff", _dark: "#fff" },
									description: "Задний фон в поле поиска",
								},
								Color: {
									...MotifColor,
									description: "цвет внутри",
								},
							},
							Favorite: {
								Background: {
									value: { base: "#fff", _dark: "#fff" },
									description: "Задний фон в поле поиска",
								},
								Color: {
									...MotifColor,
									description: "цвет внутри",
								},
							},
							Cart: {
								Background: {
									value: { base: "#fff", _dark: "#fff" },
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
          Bottom:{
            Background: {
              value: { base: "#e6e6e6", _dark: "#e6e6e6" },
              description: "Навигация фон",
            },
            ColorText: {
              value: { base: "black", _dark: "white" },
              description: "Навигация цвет текста",
            },
            Category:{
              Background: {
                ...MotifColor,
                description: "Навигация фон",
              },
              ColorText: {
                value: { base: "white", _dark: "white" },
                description: "Навигация цвет текста",
              },
            }
          }
				},
				// Контент страницы
				Content: {
					Background: {
						value: { base: "gray.900", _dark: "gray.900" },
						description: "Контент фон",
					},
					ColorText: {
						value: { base: "black", _dark: "white" },
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
						value: { base: "black", _dark: "white" },
						description: "Подвал цвет текста",
					},
				},
			},
		},
	},
};
export default theme;
