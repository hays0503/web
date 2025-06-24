import { Text, TextProps } from '@chakra-ui/react';

type PriceTextProps = Omit<TextProps, 'children'> & {
  price: number;
};

const PriceText: React.FC<PriceTextProps> = ({ price, ...props }) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(price);

  return (
    <Text {...props}>
      {formattedPrice} ₸
    </Text>
  );
};

export default PriceText;
