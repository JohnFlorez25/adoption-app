import React from 'react'
import {
    Wrap,
  } from "@chakra-ui/react";

const PetMain = ({ children }) => (
    <Wrap ml={20} mt={5} spacing="40px">
        {children}
    </Wrap>
    
);

export default PetMain
