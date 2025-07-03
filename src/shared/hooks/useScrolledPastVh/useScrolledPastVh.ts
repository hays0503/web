import { useEffect, useState } from "react";

const useScrolledPastVh = (id: string, multiplier: number = 1): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const checkScroll = () => {
      const scrollTop = element.scrollTop;
      const viewportHeight = window.innerHeight;
      setScrolled(scrollTop > viewportHeight * multiplier);
    };

    // Проверка при монтировании
    checkScroll();

    element.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll); // на случай изменения vh

    return () => {
      element.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [id, multiplier]);

  return scrolled;
};

export default useScrolledPastVh;