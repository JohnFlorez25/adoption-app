import React, { Component } from "react";

import { 
        Flex, 
        Heading, 
        StackDivider, 
        Text, 
        VStack
} from "@chakra-ui/react";

import CategorieItem from "../components/CategorieItem";

export default class AdoptionHome extends Component {
  render() {
    return (
      <Flex direction="column" mt="2" alignItems="center">
          <Heading mt="5" mb="5">
              Adopta una adorable mascota
          </Heading>
          <Text mb="5" textStyle="h3">
              Categoría de mascotas
          </Text>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="center"
          >
              <CategorieItem />
              <Heading> Listar las Categorías</Heading>
          </VStack>
      </Flex>
    );
  }
}
