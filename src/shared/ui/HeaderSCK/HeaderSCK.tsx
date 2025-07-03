import { Heading, HeadingProps } from "@chakra-ui/react"


const HeaderSCK: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading color={"BlackAndWhite"} {...props}
    size={"2xl"}
    //  fontSize={"1.875rem"}
     >
      {children}
    </Heading>
  );
};

export default HeaderSCK;