import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const GotoButton = props => {
  return (
    <Button
      as={Link}
      w="180px"
      to="/login"
      bgColor="#1A73E8"
      colorScheme="blue"
      borderRadius="base"
    >
      Go to FGallery
    </Button>
  );
};

export default GotoButton;
