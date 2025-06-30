// category.mock.ts

export type Category = {
  slug: string;
  name: string;
  image?: string; // Иконка только для root-уровня
  children?: Category[];
};

export const Data: Category[] = [
  {
    slug: "tehnika",
    name: "Техника и современные цифровые устройства для дома и офиса",
    image: "/icons/tehnika.svg",
    children: Array.from({ length: 15 }, (_, i) => ({
      slug: `device-group-${i + 1}`,
      name: `Раздел ${
        i + 1
      }: Электронные устройства и техника для повседневного использования в различных условиях`,
      children: Array.from({ length: 15 }, (_, j) => ({
        slug: `device-subgroup-${i + 1}-${j + 1}`,
        name: `Подраздел ${
          j + 1
        }: Модельный ряд современной техники с поддержкой новейших стандартов`,
        children: Array.from({ length: 15 }, (_, k) => ({
          slug: `device-model-${i + 1}-${j + 1}-${k + 1}`,
          name: `Уровень 3 – Серия ${
            k + 1
          }: Расширенные устройства с высоким качеством исполнения и поддержкой функций AI`,
          children: Array.from({ length: 15 }, (_, l) => ({
            slug: `device-item-${i + 1}-${j + 1}-${k + 1}-${l + 1}`,
            name: `Уровень 4 – Позиция ${
              l + 1
            }: Полное название товара, включающее технические характеристики, бренд и назначение`,
          })),
        })),
      })),
    })),
  },
  {
    slug: "mebel",
    name: "Мебель",
    image: "/icons/mebel.svg",
    children: [
      {
        slug: "dlya-doma",
        name: "Для дома",
        children: [
          {
            slug: "divany",
            name: "Диваны",
            children: [
              { slug: "uglovye", name: "Угловые" },
              { slug: "pryamye", name: "Прямые" },
            ],
          },
          {
            slug: "stoly",
            name: "Столы",
            children: [
              { slug: "obedennye", name: "Обеденные" },
              { slug: "kompyuternye", name: "Компьютерные" },
            ],
          },
        ],
      },
      {
        slug: "dlya-ofisa",
        name: "Для офиса",
        children: [
          {
            slug: "kresla",
            name: "Кресла",
            children: [
              { slug: "ergonomichnye", name: "Эргономичные" },
              { slug: "klassicheskie", name: "Классические" },
            ],
          },
          {
            slug: "stulya",
            name: "Стулья",
            children: [
              { slug: "na-kolesikah", name: "На колёсиках" },
              { slug: "derevyannye", name: "Деревянные" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "odezhda",
    name: "Одежда",
    image: "/icons/odezhda.svg",
    children: [
      {
        slug: "zhenskaya",
        name: "Женская",
        children: [
          {
            slug: "platya",
            name: "Платья",
            children: [
              { slug: "vechernie", name: "Вечерние" },
              { slug: "povsednevnye", name: "Повседневные" },
            ],
          },
          {
            slug: "bluzki",
            name: "Блузки",
            children: [
              { slug: "s-dlinnym-rukavom", name: "С длинным рукавом" },
              { slug: "bez-rukavov", name: "Без рукавов" },
            ],
          },
        ],
      },
      {
        slug: "muzhskaya",
        name: "Мужская",
        children: [
          {
            slug: "kurtki",
            name: "Куртки",
            children: [
              { slug: "zimnie", name: "Зимние" },
              { slug: "vetrovki", name: "Ветровки" },
            ],
          },
          {
            slug: "dzhinsy",
            name: "Джинсы",
            children: [
              { slug: "uzkie", name: "Узкие" },
              { slug: "klassicheskie", name: "Классические" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "eda",
    name: "Еда",
    image: "/icons/eda.svg",
    children: [
      {
        slug: "ovoshchi-frukty",
        name: "Овощи и фрукты",
        children: [
          {
            slug: "frukty",
            name: "Фрукты",
            children: [
              { slug: "yabloki", name: "Яблоки" },
              { slug: "banany", name: "Бананы" },
            ],
          },
          {
            slug: "ovoshchi",
            name: "Овощи",
            children: [
              { slug: "pomidor", name: "Помидоры" },
              { slug: "ogurcy", name: "Огурцы" },
            ],
          },
        ],
      },
      {
        slug: "myaso",
        name: "Мясо и рыба",
        children: [
          {
            slug: "myasnye-produkty",
            name: "Мясные продукты",
            children: [
              { slug: "govyadina", name: "Говядина" },
              { slug: "kurica", name: "Курица" },
            ],
          },
          {
            slug: "ryba",
            name: "Рыба",
            children: [
              { slug: "losos", name: "Лосось" },
              { slug: "treska", name: "Треска" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "avto",
    name: "Авто",
    image: "/icons/avto.svg",
    children: [
      {
        slug: "shiny",
        name: "Шины",
        children: [
          {
            slug: "zimnie",
            name: "Зимние",
            children: [
              { slug: "shiny-r13", name: "R13" },
              { slug: "shiny-r14", name: "R14" },
            ],
          },
          {
            slug: "letnie",
            name: "Летние",
            children: [
              { slug: "shiny-r15", name: "R15" },
              { slug: "shiny-r16", name: "R16" },
            ],
          },
        ],
      },
      {
        slug: "masla",
        name: "Масла",
        children: [
          {
            slug: "dvigatelnoe",
            name: "Двигательное",
            children: [
              { slug: "synteticheskoe", name: "Синтетическое" },
              { slug: "polusyntet", name: "Полусинтетика" },
            ],
          },
          {
            slug: "transmissionnoe",
            name: "Трансмиссионное",
            children: [
              { slug: "automat", name: "Для АКПП" },
              { slug: "mechanika", name: "Для МКПП" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "sport",
    name: "Спорт",
    image: "/icons/sport.svg",
    children: [
      {
        slug: "trenazhery",
        name: "Тренажёры",
        children: [
          {
            slug: "doma",
            name: "Для дома",
            children: [
              { slug: "velotren", name: "Велотренажёры" },
              { slug: "steppery", name: "Степперы" },
            ],
          },
          {
            slug: "zal",
            name: "Для зала",
            children: [
              { slug: "power-racks", name: "Силовые стойки" },
              { slug: "bench", name: "Скамьи" },
            ],
          },
        ],
      },
      {
        slug: "aktivnyj-otdyh",
        name: "Активный отдых",
        children: [
          {
            slug: "turizm",
            name: "Туризм",
            children: [
              { slug: "palatki", name: "Палатки" },
              { slug: "spalniki", name: "Спальники" },
            ],
          },
          {
            slug: "velosipedy",
            name: "Велосипеды",
            children: [
              { slug: "gornye", name: "Горные" },
              { slug: "gorodskie", name: "Городские" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "knigi",
    name: "Книги",
    image: "/icons/books.svg",
    children: [
      {
        slug: "hudozhestvennaya",
        name: "Художественная",
        children: [
          {
            slug: "detektivy",
            name: "Детективы",
            children: [
              { slug: "klassika", name: "Классика" },
              { slug: "sovremennye", name: "Современные" },
            ],
          },
          {
            slug: "fantastika",
            name: "Фантастика",
            children: [
              { slug: "nauchnaya", name: "Научная" },
              { slug: "epicheskaya", name: "Эпическая" },
            ],
          },
        ],
      },
      {
        slug: "nauchno-pop",
        name: "Научно-популярная",
        children: [
          {
            slug: "psihologiya",
            name: "Психология",
            children: [
              { slug: "samohelp", name: "Самопомощь" },
              { slug: "teoriya", name: "Теоретическая" },
            ],
          },
          {
            slug: "istoriya",
            name: "История",
            children: [
              { slug: "drevnost", name: "Древность" },
              { slug: "xx-vek", name: "XX век" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "instrumenty",
    name: "Инструменты",
    image: "/icons/tools.svg",
    children: [
      {
        slug: "elektroinstrument",
        name: "Электроинструмент",
        children: [
          {
            slug: "shurupoverty",
            name: "Шуруповёрты",
            children: [
              { slug: "akkum", name: "Аккумуляторные" },
              { slug: "setevye", name: "Сетевые" },
            ],
          },
          {
            slug: "bolgarki",
            name: "Болгарки",
            children: [
              { slug: "malye", name: "Малые" },
              { slug: "bolshie", name: "Большие" },
            ],
          },
        ],
      },
      {
        slug: "sadovyy",
        name: "Садовый инструмент",
        children: [
          {
            slug: "lopaty",
            name: "Лопаты",
            children: [
              { slug: "metallicheskie", name: "Металлические" },
              { slug: "plastik", name: "Пластиковые" },
            ],
          },
          {
            slug: "sekatory",
            name: "Секаторы",
            children: [
              { slug: "dvuruchnye", name: "Двуручные" },
              { slug: "odnoruchnye", name: "Одноручные" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "krasota",
    name: "Красота и уход",
    image: "/icons/beauty.svg",
    children: [
      {
        slug: "makiyazh",
        name: "Макияж",
        children: [
          {
            slug: "glaza",
            name: "Глаза",
            children: [
              { slug: "teni", name: "Тени" },
              { slug: "tush", name: "Тушь" },
            ],
          },
          {
            slug: "guby",
            name: "Губы",
            children: [
              { slug: "pomada", name: "Помада" },
              { slug: "blestki", name: "Блёстки" },
            ],
          },
        ],
      },
      {
        slug: "uhod",
        name: "Уход",
        children: [
          {
            slug: "volosy",
            name: "Волосы",
            children: [
              { slug: "shampuni", name: "Шампуни" },
              { slug: "maski", name: "Маски" },
            ],
          },
          {
            slug: "lico",
            name: "Лицо",
            children: [
              { slug: "kremy", name: "Кремы" },
              { slug: "syvorotki", name: "Сыворотки" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "deti",
    name: "Детские товары",
    image: "/icons/kids.svg",
    children: [
      {
        slug: "igrushki",
        name: "Игрушки",
        children: [
          {
            slug: "konstruktory",
            name: "Конструкторы",
            children: [
              { slug: "lego", name: "LEGO" },
              { slug: "magnitnye", name: "Магнитные" },
            ],
          },
          {
            slug: "myagkie",
            name: "Мягкие игрушки",
            children: [
              { slug: "medvedi", name: "Медведи" },
              { slug: "koshki", name: "Кошки" },
            ],
          },
        ],
      },
      {
        slug: "detskie-odezhdy",
        name: "Одежда",
        children: [
          {
            slug: "dlya-malchikov",
            name: "Для мальчиков",
            children: [
              { slug: "kurtki", name: "Куртки" },
              { slug: "bryuki", name: "Брюки" },
            ],
          },
          {
            slug: "dlya-devochek",
            name: "Для девочек",
            children: [
              { slug: "platya", name: "Платья" },
              { slug: "kofty", name: "Кофты" },
            ],
          },
        ],
      },
    ],
  },
];
