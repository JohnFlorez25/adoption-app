import React from "react";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { categories } from "../utils/mocks/categories";

const CategorieItem = (props) => {
  return (
    <Wrap ml={3} spacing="40px" align="center">
      {categories.map((categorie) => {
        return (
          <WrapItem
            _selected={{
              bg: "tomato",
            }}
            key={`${categorie.id}-${categorie.name}`}
            w="240px"
            bg={"brand.black"}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
            ml={5}
            mr={15}
            cursor="pointer"
            opacity={0.8}
            _hover={{
              opacity: "1",
            }}
            onClick={(e) => {
              props.onClick(e, categorie.name);
            }}
          >
            <Flex justify={"center"} mt={2} mb={2}>
              <Stack direction={"row"}>
                <Center w="100px">
                  <Avatar
                    size={"xl"}
                    ml={5}
                    src={categorie.image}
                    alt={"categories"}
                    css={{
                      border: "2px solid white",
                    }}
                    bg={"brand.green"}
                  />
                </Center>
                <Center w="100px">
                  <Text ml={5} color="brand.white" textStyle="h3">
                    {categorie.section}
                  </Text>
                </Center>
              </Stack>
            </Flex>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default CategorieItem;
