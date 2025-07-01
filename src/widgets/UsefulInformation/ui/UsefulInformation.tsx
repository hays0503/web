import { Box, Heading, HStack, Image, Show, Tabs, Text, VStack } from "@chakra-ui/react";

type SlideProps = {
    title: string;
    description: string;
    image: string;
}  

type TabsProps = {
    id: number;
    Title: string;
    slide?: SlideProps[]
}

const Data: TabsProps[] = [
  {
    Title: "Все рубрики",
    id: 0,
    slide: [
      {
        title: "Мебель для гостиной: 6 важных принципов",
        description: "12.11.2025 Что почитать перед покупкой",
        image: "/promo/promoSlide14.webp",
      },
      {
        title: "Выбор кухонной плиты. Советы специалиста",
        description: "27.02.2025 Что почитать перед покупкой",
        image: "/promo/promoSlide15.webp",
      },
      {
        title: "Кресло дляя отдыха: как выбрать?",
        description: "12.11.2025 Статья",
        image: "/promo/promoSlide16.webp",
      },
    ],
  },
  {
    Title: "Блог",
    id: 1,
    slide: [
      {
        title: "Мебель для гостиной: 6 важных принципов",
        description: "12.11.2025 Что почитать перед покупкой",
        image: "/promo/promoSlide14.webp",
      },
    ],
  },
  {
    Title: "Акции",
    id: 2,
    slide: [
      {
        title: "Выбор кухонной плиты. Советы специалиста",
        description: "27.02.2025 Что почитать перед покупкой",
        image: "/promo/promoSlide15.webp",
      },
    ],
  },
  {
    Title: "Статьи",
    id: 3,
    slide: [
      {
        title: "Кресло дляя отдыха: как выбрать?",
        description: "12.11.2025 Статья",
        image: "/promo/promoSlide16.webp",
      },
    ],
  },
  { Title: "Что почитать перед покупкой", id: 4, slide: [] },
];

const TabsListFor: React.FC<{Data: TabsProps[]}> = ({Data}) => {
    return (
      <Tabs.List>
        {Data.map((item) => (
          <Tabs.Trigger
            key={item.id}
            value={item.Title}
            css={{
              "&:is([aria-selected=true], [data-selected])": {
                color: "Motif",
              },
              "&:is([aria-selected=true], [data-selected])[data-orientation=horizontal]": {
                  "--indicator-color": "var(--chakra-colors--motif)"
              }
            }}
          >
            {item.Title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    );
}

const Content:React.FC<{Data: SlideProps}> = ({Data}) => {
    const {title, description, image} = Data
    return (
      <Box>
        <VStack gap={"5px"} align={"flex-start"} key={`${title}-${image}-${description}`}>
          <Image src={image} alt={image} />
          <Text>{description}</Text>
          <Heading size={"sm"}>{title}</Heading>
        </VStack>
      </Box>
    );
}

const TabsContentFor: React.FC<{Data: TabsProps[]}> = ({Data}) => {
    return (
      <>
        {Data.map((item) => (
          <Tabs.Content key={item.id} value={item.Title}>
            <Show when={item.slide}>
              <HStack>
                {item.slide &&
                  item.slide?.map((itemSlide, index) => (
                    <Content
                      key={`${index}-${itemSlide.title}`}
                      Data={itemSlide}
                    />
                  ))}
              </HStack>
            </Show>
          </Tabs.Content>
        ))}
      </>
    );
}


const UsefulInformation = () => {
    return (
      <VStack align={"flex-start"} bg={"red.100"} w={"full"}>
        <Tabs.Root
          defaultValue={"Все рубрики"}
        >
          <TabsListFor Data={Data} />
          <TabsContentFor Data={Data} />
        </Tabs.Root>
      </VStack>
    );
};
export default UsefulInformation;