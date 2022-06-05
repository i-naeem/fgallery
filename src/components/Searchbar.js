import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '../assets/icons';

const Searchbar = props => {
  return (
    <InputGroup {...props}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="search" placeholder="Search your photos" />
    </InputGroup>
  );
};

export default Searchbar;
