import { Box, HStack, IconButton, SimpleGrid } from '@chakra-ui/react';
import PhotoItem from '../../components/PhotoItem';
import { HerImage } from '../../assets/images';
import { DeleteIcon } from '../../assets/icons';
import { useState } from 'react';

const sampleImages = [
  { src: HerImage, alt: 'Her Image', selected: false, id: 1 },
  { src: HerImage, alt: 'Her Image', selected: false, id: 2 },
  { src: HerImage, alt: 'Her Image', selected: false, id: 3 },
  { src: HerImage, alt: 'Her Image', selected: false, id: 4 },
  { src: HerImage, alt: 'Her Image', selected: false, id: 5 },
];
const Photos = props => {
  const [imgs, setImgs] = useState(sampleImages);

  const selectImage = id => {
    setImgs(
      imgs.map(img => {
        if (img.id === id) return { ...img, selected: !img.selected };
        return img;
      })
    );
  };

  const anyOneSelected = imgs.some(img => img.selected);
  return (
    <Box p="4">
      <HStack justifyContent="end" p="2" hidden={!anyOneSelected}>
        <IconButton icon={<DeleteIcon />} />
      </HStack>
      <SimpleGrid columns={4} spacing={anyOneSelected ? 5 : 1}>
        {imgs.map((img, idx) => (
          <PhotoItem img={img} key={idx} onSelect={selectImage} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Photos;
