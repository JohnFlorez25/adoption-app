import React from "react";
import {
    Box,
    Text,
    Heading,
  } from "@chakra-ui/react";

const PetHistory = (props) => {
  return (
    /**Historia de la Mascota */
    <Box mt={10}>
      <Heading>Historia de {props.name}</Heading>
      <Text ml={5} mt={10} color="brand.black" textStyle="h3">
        {props.history}
      </Text>
    </Box>
  );
};

export default PetHistory;
