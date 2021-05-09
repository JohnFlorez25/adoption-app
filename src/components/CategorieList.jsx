import React from "react";

import { Box, Wrap, Image, Text, WrapItem } from "@chakra-ui/react";

const CategorieList = (props) => {
  // const property = {
  //   dogUrl: "https://storage.googleapis.com/adoptio-app-ag-2021/dog.png",
  //   dogAlt: "Dog",
  //   name: "Rocky",
  //   breed: "Rootweiler",
  // };

  return (
    <Wrap spacing="30px" align="center">
      {props.categories.map((categorie) => {
        return (
          <WrapItem key={`${categorie.id}-${categorie.name}`}>
            <Box maxW="sm" rounded="lg" overflow="hidden">
              <Image
                height={400}
                width={250}
                src={categorie.imageUrl}
                alt={categorie.imageAlt}
                opacity={0.6}
                _hover={{
                  opacity: "1",
                }}
              />
              <Text color="brand.white" textStyle="h5" mt={-50} ml={5}>
                {categorie.name}
              </Text>
              <Text color="brand.white" textStyle="h6" ml={5}>
                {categorie.breed}
              </Text>
            </Box>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default CategorieList;
