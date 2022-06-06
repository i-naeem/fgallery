import { Box, Checkbox, Image } from '@chakra-ui/react';

const PhotoItem = ({ img }) => {
  return (
    <Box role="button" pos="relative">
      <Box pos="absolute" bgColor="blackAlpha.200" p="2" width="100%">
        <Checkbox />
      </Box>
      <Image src={img.src} alt={img.alt} width="100%" />
    </Box>
  );
};

export default PhotoItem;
