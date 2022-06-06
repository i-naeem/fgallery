import { Box, Checkbox, Image } from '@chakra-ui/react';

const PhotoItem = ({ img, onSelect }) => {
  return (
    <Box
      role="button"
      pos="relative"
      _hover={{ '.select': { display: 'block' } }}
    >
      <Box
        p="2"
        width="100%"
        pos="absolute"
        className="select"
        bgColor="blackAlpha.200"
        sx={{
          display: img.selected ? 'block' : 'none',
        }}
      >
        <Checkbox value={img.selected} onChange={() => onSelect(img.id)} />
      </Box>
      <Image src={img.src} alt={img.alt} width="100%" />
    </Box>
  );
};

export default PhotoItem;
