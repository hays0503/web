"use client";

import { ErrorBoundaryLogger } from "@/shared/ui/ErrorBoundaryLogger";
import {
  Button,
  Group,
  Icon,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState, useTransition } from "react";
import { ImLocation } from "react-icons/im";

export default function ChangeCity() {
  const [city, setCity] = useState<string>("Караганда");
  const [isPending, startTransition] = useTransition();
  const handleCityChange = () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api-mapping/proxy/api/v1/geo/by-ip", {
          mode:'no-cors',
          method: "GET",
          headers: {
            accept: "application/json",
            "Accept-Language": "ru",
            Host: "1.1.1.1",
          },
        });
        if (!response.ok) throw new Error("Ошибка сети");
        const data = await response.json();
        setCity(data.city || "Караганда");
      } catch (error) {
        console.error("Ошибка при получении города:", error);
      }
    });
  };
  return (
    <ErrorBoundaryLogger
      contextMessage="Ошибка на уровне ChangeCity"
      fallbackUI={<div>Ошибка на уровне ChangeCity</div>}
    >
      <Button
        onClick={handleCityChange}
        variant="subtle"
        p="0px 10px"
        rounded="full"
        bg="Header.Top.ChangeCity.Background"
        size="xs"
        asChild
      >
        <Group gap={1}>
          <Icon as={ImLocation} color="Header.Top.ChangeCity.LocationIcon" />
          {isPending ? (<Spinner size="xs" color="Header.Top.ChangeCity.ColorText" />) : (
            <Text color="Header.Top.ChangeCity.ColorText">
              {city}
            </Text>
          )}
        </Group>
      </Button>
    </ErrorBoundaryLogger>
  );
}
