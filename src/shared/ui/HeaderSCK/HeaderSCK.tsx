import { Heading, HeadingProps } from "@chakra-ui/react"


const HeaderSCK: React.FC<HeadingProps> = ({ children, ...props }) => {
  return <Heading color={'BlackAndWhite'} {...props}>{children}</Heading>;
};

export default HeaderSCK