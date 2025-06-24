"use client";

import { ErrorBoundaryLogger } from "@/shared/ui/ErrorBoundaryLogger";
import { Flex, Group } from "@chakra-ui/react";

interface TopHeaderProps {
	readonly ChangeCity: React.ReactNode;
	readonly ChangeLang: React.ReactNode;
	readonly NavigationLinks: React.ReactNode;
}

export default function TopHeader({
	ChangeCity,
	ChangeLang,
	NavigationLinks,
}: TopHeaderProps) {
	return (
    <ErrorBoundaryLogger
      contextMessage="Ошибка на уровне TopHeader"
      fallbackUI={<div>Ошибка на уровне TopHeader</div>}
    >
      <Flex	  
        wrap={"nowrap"}
        justify={"space-between"}
        align={"center"}
        w={"100%"}
        minH={"48px"}
        bg="Header.Top.Background"
        color="Header.Top.ColorText"
      >
        <Group gap={1}>
          {ChangeCity}
          {ChangeLang}
        </Group>
        {NavigationLinks}
      </Flex>
    </ErrorBoundaryLogger>
  );
}
