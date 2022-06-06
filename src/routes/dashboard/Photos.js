import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { HerImage } from '../../assets/images';

const Photos = props => {
  return (
    <Box p="4" bg="blue">
      <SimpleGrid columns={4} spacing={6}>
        <Box>
          <Image src={HerImage} alt="her" width="100%" />
        </Box>
        <Box>
          <Image src={HerImage} alt="her" width="100%" />
        </Box>
        <Box>
          <Image src={HerImage} alt="her" width="100%" />
        </Box>
        <Box>
          <Image src={HerImage} alt="her" width="100%" />
        </Box>
        <Box>
          <Image src={HerImage} alt="her" width="100%" />
        </Box>
        <Box>
          <Image src={HerImage} alt="her" width="100%" />
        </Box>
        <Box>
          <Image src={HerImage} alt="her" width="100%" />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Photos;
