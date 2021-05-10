import React from 'react'
import {Link} from 'react-router-dom';
import {
    Stack,
    Button
  } from "@chakra-ui/react";

const BottomNavBar = () => {
    return (
        <Stack mt={20} spacing={40} justifyContent="center" direction={'row'}>
        <Link to="/">
        <Button
            rounded={'full'}
            px={6}
            w={200}
            bg={'brand.white'}
            _hover={{ bg: 'brand.secondary' }}>
            Inicio
          </Button>
        </Link>
        <Link to="/favorites">
        <Button 
          rounded={'full'}
          px={6}
          w={200}
          colorScheme={'orange'}
          bg={'brand.secondary'}
          _hover={{ bg: 'brand.blue' }}>
            Favoritos
          </Button>
        </Link>

        </Stack>
    )
}

export default BottomNavBar
