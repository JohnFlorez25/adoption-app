import React from "react";
import { Link } from "react-router-dom";
import { Box, Wrap, Image, Text, WrapItem } from "@chakra-ui/react";

const CategorieList = (props) => {
  return (
    <Wrap spacing="40px" justify="center">
      {props.categories.map( categorie => {
        return (
          <WrapItem key={`${categorie.id}-${categorie.name}`}>
            {/** Section: dogs - cats
             * localhost:300/dogs/dog-1
             * localhost:300/cats/cat-1
             */}  
            <Link to={`/${props.section}/${categorie.id}`}>
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
            </Link>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default CategorieList;