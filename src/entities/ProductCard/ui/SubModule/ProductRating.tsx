import { HStack, Icon, Text } from "@chakra-ui/react";
import { IoIosStar } from "react-icons/io";


const ProductRating: React.FC<{ rating: number, reviews: number }> = ({ rating, reviews }) => {
    return (
      <HStack justify="center" gap={1} fontSize="xs" mb={2}>
        <Icon as={IoIosStar} color="Motif" boxSize={3} />
        <Text fontWeight="bold" color="Motif">
          {rating.toFixed(1)}
        </Text>
        <Text color="gray.500">({reviews} отзывов)</Text>
      </HStack>
    );
}
export default ProductRating