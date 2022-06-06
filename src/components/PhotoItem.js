import { Box, Checkbox, Image } from '@chakra-ui/react';
import { useState } from 'react';

const PhotoItem = ({ img }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Box
      role="button"
      pos="relative"
      _hover={{ '.select': { display: 'block' } }}
    >
      <Box
        pos="absolute"
        bgColor="blackAlpha.200"
        p="2"
        width="100%"
        className="select"
        sx={{ display: isSelected ? 'block' : 'none' }}
      >
        <Checkbox
          value={isSelected}
          onChange={() => setIsSelected(!isSelected)}
        />
      </Box>
      <Image src={img.src} alt={img.alt} width="100%" />
    </Box>
  );
};

export default PhotoItem;
