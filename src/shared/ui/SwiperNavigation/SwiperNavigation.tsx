import { IconButton } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { RefObject } from "react";

interface Props {
  prevRef: RefObject<HTMLButtonElement|null>;
  nextRef: RefObject<HTMLButtonElement|null>;
  isVisible?: boolean;
}

export const SwiperNavigation = ({ prevRef, nextRef, isVisible = true }: Props) => {
  if (!isVisible) return null;

  return (
    <>
      <IconButton
        ref={prevRef}
        aria-label="Предыдущий"
        position="absolute"
        left="-48px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        borderRadius="full"
        boxShadow="md"
        _hover={{ filter: "brightness(0.9)" }}
        bg={"Motif"}
        css={{
          "&.swiper-button-disabled": {
            opacity: 0.4,
            cursor: "not-allowed",
            pointerEvents: "none",
            bg:'WhiteAndBlack',
            color:'Motif'
          },
        }}
      >
        <BiChevronLeft size={24} />
      </IconButton>

      <IconButton
        ref={nextRef}
        aria-label="Следующий"
        position="absolute"
        right="-48px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        borderRadius="full"
        boxShadow="md"
        bg={"Motif"}
        _hover={{ filter: "brightness(0.9)" }}
      >
        <BiChevronRight size={24} />
      </IconButton>
    </>
  );
};
