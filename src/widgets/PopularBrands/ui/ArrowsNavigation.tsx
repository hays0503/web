import { IconButton, Show } from "@chakra-ui/react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { SwiperClass } from "swiper/react"

interface ArrowsNavigationProps {
    swiperRef: React.RefObject<SwiperClass|null>;
    readonly isMobile: boolean|undefined
    readonly showNavigation: boolean
    readonly animationDuration: number
}

const ArrowsNavigation: React.FC<ArrowsNavigationProps> = ({
  swiperRef,
  isMobile,
  showNavigation,
  animationDuration
}) => {
    const navBtnStyle = {
      position: "absolute" as const,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      bg: "white",
      shadow: "lg",
      rounded: "full",
      sizes: "md",
      color: "gray.600",
      _hover: { bg: "gray.50", shadow: "xl" },
      _active: { transform: "translateY(-50%) scale(0.95)" },
      transition: `all ${animationDuration}ms ease`,
    };
  const isShow = showNavigation && !isMobile;
  return (
    <Show when={isShow}>
      <IconButton
        aria-label="Назад"
        onClick={() => swiperRef.current?.slidePrev()}
        left="-50px"
        {...navBtnStyle}
      >
        <BiChevronLeft />
      </IconButton>
      <IconButton
        aria-label="Вперёд"
        onClick={() => swiperRef.current?.slideNext()}
        right="-50px"
        {...navBtnStyle}
      >
        <BiChevronRight />
      </IconButton>
    </Show>
  );
}; 

export default ArrowsNavigation