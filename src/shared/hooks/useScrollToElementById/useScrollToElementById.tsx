const useScrollContainerToTop = (id: string) => {
  const scrollToTop = (behavior: ScrollBehavior = "smooth") => {
    const container = document.getElementById(id);
    if (container) {
      if (behavior === "smooth") {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollTop = 0;
      }
    }
  };

  return scrollToTop;
};

export default useScrollContainerToTop;