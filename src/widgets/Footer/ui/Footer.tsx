"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { BiPhone } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { memo } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const FOOTER_SECTIONS = [
  {
    id: "marketplace",
    title: "SCK маркетплейс",
    links: [
      { text: "О нас", href: "/about" },
      { text: "Пресс-центр", href: "/press" },
      { text: "Контакты", href: "/contacts" },
      { text: "Вакансии", href: "/careers" },
      { text: "Реквизиты", href: "/requisites" },
      { text: "Сообщить о мошенничестве", href: "/fraud-report" },
      { text: "Юридическая информация", href: "/legal" },
    ],
  },
  {
    id: "buyers",
    title: "Покупателям",
    links: [
      { text: "Как сделать заказ", href: "/how-to-order" },
      { text: "Частые вопросы", href: "/faq" },
      { text: "Оплата", href: "/payment" },
      { text: "Доставка", href: "/delivery" },
      { text: "Возврат товаров", href: "/returns" },
      { text: "Адреса пунктов выдачи заказов", href: "/pickup-points" },
    ],
  },
  {
    id: "information",
    title: "Полезная информация",
    links: [
      { text: "База знаний", href: "/become-seller" },
      { text: "Статьи", href: "/become-partner" },
      { text: "Акции", href: "/open-pickup-point" },
      { text: "Частые вопросы", href: "/selling-rules" },
      { text: "Условия обработки данных", href: "/data-processing" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    Icon: FaTelegramPlane,
    href: "https://t.me/sck_marketplace",
    label: "Telegram",
  },
  {
    Icon: BiPhone,
    href: "viber://chat?number=%2B77056550000",
    label: "Viber",
  },
  {
    Icon: BsInstagram,
    href: "https://instagram.com/sck_marketplace",
    label: "Instagram",
  },
];

const SUPPORT_PHONE = "+7 705 655 00 00";
const WORKING_HOURS = "Пн-Вс: 9:00–18:00";
const COPYRIGHT_TEXT = "© SCK 2016–2025. Все права защищены.";

const FooterSection = memo(
  ({
    section,
  }: {
    section: {
      id: string;
      title: string;
      links: { text: string; href: string }[];
    };
  }) => (
    <Box textAlign={{ base: "center", lg: "left" }}>
      <Heading as="h3" fontSize="md" fontWeight="semibold" mb={4} color={"BlackAndWhite"}>
        {section.title}
      </Heading>
      <Stack gap={3}>
        {section.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            fontSize="sm"
            color={"BlackAndWhite"}
            _hover={{
              color: "BlackAndWhite",
              textDecoration: "none",
            }}
            transition="color 0.2s"
          >
            {link.text}
          </Link>
        ))}
      </Stack>
    </Box>
  )
);
FooterSection.displayName = "FooterSection";

const SocialIcons = memo(() => (
  <HStack gap={3} justify="center">
    {SOCIAL_LINKS.map(({ Icon, label }) => (
      <IconButton
        key={label}
        as={Link}
        aria-label={label}
        color={'WhiteAndBlack'}
        size="md"
        variant="ghost"
        bg={"Motif"}
        _hover={{
          bg: "gray.300",
          transform: "translateY(-2px)",
        }}
        rounded="full"
        transition="all 0.2s"
      >
        <Icon />
      </IconButton>
    ))}
  </HStack>
));
SocialIcons.displayName = "SocialIcons";

const SupportSection = memo(() => {
  const textColor = "BlackAndWhite";
  const mutedColor = "gray.600";
  const linkColor = "blue.600";
  const linkHoverColor = "blue.800";

  return (
    <Stack gap={6} textAlign={{ base: "center", lg: "left" }} align={{ base: "center", lg: "start" }}>
      <Box>
        <Heading as="h3" fontSize="md" fontWeight="semibold" mb={4} color={textColor}>
          Служба поддержки
        </Heading>
        <Link
          href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}
          fontSize="lg"
          fontWeight="medium"
          color={linkColor}
          _hover={{ color: linkHoverColor, textDecoration: "none" }}
          transition="color 0.2s"
        >
          {SUPPORT_PHONE}
        </Link>
      </Box>

      <Box>
        <Text fontWeight="medium" fontSize="sm" color={textColor} mb={2}>
          Время работы:
        </Text>
        <Text fontSize="sm" color={mutedColor}>
          {WORKING_HOURS}
        </Text>
      </Box>

      <Box>
        <Text fontWeight="medium" fontSize="sm" color={textColor} mb={3}>
          SCK в социальных сетях
        </Text>
        <SocialIcons />
      </Box>
    </Stack>
  );
});
SupportSection.displayName = "SupportSection";

export default function SCKFooter() {
  const bgColor = "gray.50";
  const borderColor = "gray.200";
  const textColor = "gray.600";
  const linkColor = "gray.600";
  const linkHoverColor = "gray.900";

  return (
    <Box
      bg={bgColor}
      _dark={{ bg: "gray.900" }}
      borderTop="1px solid"
      borderColor={borderColor}
      role="contentinfo"
      w="100%"
    >
      <Container maxW="1920px" px={{ base: 4, md: 6 }} py={12} centerContent>
        {/* Desktop Layout */}
        <SimpleGrid columns={{ base: 1, lg: 4 }} gap={8} display={{ base: "none", lg: "grid" }}>
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.id} section={section} />
          ))}
          <SupportSection />
        </SimpleGrid>

        {/* Mobile Layout */}
        <Stack gap={8} display={{ base: "flex", lg: "none" }} align="center" textAlign="center">
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.id} section={section} />
          ))}
          <SupportSection />
        </Stack>

        {/* Copyright Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          gap={4}
          mt={10}
          textAlign="center"
        >
          <Text fontSize="sm" color={textColor}>
            {COPYRIGHT_TEXT}
          </Text>
          <Link
            href="/privacy"
            fontSize="sm"
            color={linkColor}
            _hover={{
              color: linkHoverColor,
              textDecoration: "none",
            }}
            transition="color 0.2s"
          >
            Политика конфиденциальности
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
