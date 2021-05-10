import React from 'react'
import {
    WrapItem,
    Box
  } from "@chakra-ui/react";
  
const PetDetail = ({ children }) => (
    <WrapItem>
         <Box
              height={800}
              w="1200px"
              bg="brand.white"
              shadow="md"
              borderWidth="1px"
              flex="1"
              borderRadius="xl"
              align="center"
            >
                {children}
            </Box>
       
    </WrapItem>
    
);

export default PetDetail