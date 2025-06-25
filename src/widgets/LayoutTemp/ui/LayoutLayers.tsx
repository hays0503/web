"use client";
import { Box, Button, Kbd, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

// Тип для одной управляющей кнопки
interface ToggleControlProps {
  label: string;
  hotkey: string;
  value: boolean;
  onToggle: () => void;
}

// Компонент управления переключением
const ToggleControl: FC<ToggleControlProps> = ({ label, hotkey, value, onToggle }) => (
  <Box display="flex" alignItems="center">
    <Text mr="10px">
      {label}: <Kbd fontSize={16}>{hotkey}</Kbd>
    </Text>
    <Button
      color={value ? "green" : "red"}
      transition="background-color 0.3s ease"
      variant="surface"
      size="xs"
      rounded="full"
      pt="0px"
      pb="0px"
      h="21px"
      onClick={onToggle}
    >
      {value ? "Вкл" : "Выкл"}
    </Button>
  </Box>
);

const ViewLayout: FC<{
  showHint: boolean;
  setShowHint: (v: boolean) => void;
}> = ({ showHint, setShowHint }) => (
  <ToggleControl
    label="Просмотр макета"
    hotkey="Alt + 1"
    value={showHint}
    onToggle={() => setShowHint(!showHint)}
  />
);

const ToggleHeader: FC<{
  showHeader: boolean;
  setShowHeader: (v: boolean) => void;
}> = ({ showHeader, setShowHeader }) => {
  return (
    <ToggleControl
      label="Переключение заголовка"
      hotkey="Alt + 2"
      value={showHeader}
      onToggle={() => setShowHeader(!showHeader)}
    />
  );
}

const ToggleContent: FC<{
  showMain: boolean;
  setShowMain: (v: boolean) => void;
}> = ({ showMain, setShowMain }) => {
  return (
    <ToggleControl
      label="Переключение контента"
      hotkey="Alt + 3"
      value={showMain}
      onToggle={() => setShowMain(!showMain)}
    />
  );
}

const ToggleFooter: FC<{
  showFooter: boolean;
  setShowFooter: (v: boolean) => void;
}> = ({ showFooter, setShowFooter }) => {
  return (
    <ToggleControl
      label="Переключение подвала"
      hotkey="Alt + 4"
      value={showFooter}
      onToggle={() => setShowFooter(!showFooter)}
    />
  );
}




interface TogglePanelProps {
  showHint: boolean;
  showHeader: boolean;
  showMain: boolean;
  showFooter: boolean;
  setShowHint: (v: boolean) => void;
  setShowHeader: (v: boolean) => void;
  setShowMain: (v: boolean) => void;
  setShowFooter: (v: boolean) => void;
}

const TogglePanel: React.FC<TogglePanelProps> = ({
  showHint,
  showHeader,
  showMain,
  showFooter,
  setShowHint,
  setShowHeader,
  setShowMain,
  setShowFooter,
}) => {
  return (
    <VStack
      position="fixed"
      bottom="10%"
      left="4"
      bg="rgba(0,0,0,0.5)"
      color="white"
      px="3"
      py="1"
      borderRadius="md"
      fontSize="sm"
      zIndex={9999}
      alignItems="flex-start"
    >
      <ViewLayout showHint={showHint} setShowHint={setShowHint} />
      <ToggleHeader showHeader={showHeader} setShowHeader={setShowHeader} />
      <ToggleContent showMain={showMain} setShowMain={setShowMain} />
      <ToggleFooter showFooter={showFooter} setShowFooter={setShowFooter} />
    </VStack>
  );
};

const Layer: FC<{ backgroundImage: string; size: string; showHint: boolean,zIndex:number }> = ({ backgroundImage, size, showHint,zIndex }) => {
    return (
      <Box
        position="absolute"
        w="100%"
        h="100%"
        backgroundImage={backgroundImage}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={size}
        opacity={showHint ? 1 : 0}
        transition="opacity 0.8s ease"
        zIndex={zIndex}
      />
    );
}



// Пропсы для LayoutLayers
interface LayoutLayersProps {
  layoutImage: string;
  size: string;
  showHint: boolean;
  showHeader: boolean;
  showMain: boolean;
  showFooter: boolean;
  setShowHint: (v: boolean) => void;
  setShowHeader: (v: boolean) => void;
  setShowMain: (v: boolean) => void;
  setShowFooter: (v: boolean) => void;
}

// Главный компонент
const LayoutLayers: FC<LayoutLayersProps> = ({
  layoutImage,
  size,
  showHint,
  showHeader,
  showMain,
  showFooter,
  setShowHint,
  setShowHeader,
  setShowMain,
  setShowFooter,
}) => {
  return (
    <>
      <Layer
        backgroundImage={`url('/layoutImg/${layoutImage}')`}
        size={size}
        showHint={showHint}
        zIndex={2}
      />
      <Layer
        backgroundImage={`repeating-linear-gradient(
          -60deg,
          #555 0,
          #555 1px,
          transparent 1px,
          transparent 5px
        )`}
        size={size}
        showHint={showHint}
        zIndex={1}
      />
      <TogglePanel
        showHint={showHint}
        showHeader={showHeader}
        showMain={showMain}
        showFooter={showFooter}
        setShowHint={setShowHint}
        setShowHeader={setShowHeader}
        setShowMain={setShowMain}
        setShowFooter={setShowFooter}
      />
    </>
  );
};

export default LayoutLayers;
