import React from "react";
import { Link } from "react-router-dom";
import { Box, Wrap, Image, Text, WrapItem } from "@chakra-ui/react";

const PetFavList = (props) => {

  return (
    <Wrap spacing="40px" justify="center">
      {props.pets.map((pet) => {
        {var splitId = pet.id.split("-")} 
        return (
          <WrapItem key={`${pet.id}-${pet.name}`}>
            <Link to={`/${splitId[0]}s/${pet.id}`}>
              <Box maxW="sm" rounded="lg" overflow="hidden">
                <Image
                  height={400}
                  width={250}
                  src={pet.imageUrl}
                  alt={pet.imageAlt}
                  opacity={0.6}
                  _hover={{
                    opacity: "1",
                  }}
                />
                <Text color="brand.white" textStyle="h5" mt={-50} ml={5}>
                  {pet.name}
                </Text>
                <Text color="brand.white" textStyle="h6" ml={5}>
                  {pet.breed}
                </Text>
              </Box>
            </Link>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default PetFavList;
