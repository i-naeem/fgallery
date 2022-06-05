import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const GotoButton = props => {
  return (
    <Button
      as={Link}
      w="180px"
      to="/login"
      colorScheme="blue"
      borderRadius="base"
    >
      Go to FGallery
    </Button>
  );
};

export default GotoButton;
