import { Box, SimpleGrid } from '@chakra-ui/react';
import PhotoItem from '../../components/PhotoItem';
import { HerImage } from '../../assets/images';

const imgs = [
  { src: HerImage, alt: 'Her Image' },
  { src: HerImage, alt: 'Her Image' },
  { src: HerImage, alt: 'Her Image' },
  { src: HerImage, alt: 'Her Image' },
  { src: HerImage, alt: 'Her Image' },
];
const Photos = props => {
  return (
    <Box p="4">
      <SimpleGrid columns={4} spacing={3}>
        {imgs.map((img, idx) => (
          <PhotoItem img={img} key={idx} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Photos;
