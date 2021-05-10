import React from "react";
import { 
    Wrap, 
    WrapItem, 
    Flex, 
    Stack, 
    Center, 
    Avatar,
    Text 
} from "@chakra-ui/react";
import LogoPerro from '../images/perros.png';

const CategorieItem = () => {
  return (
    <Wrap ml={3} spacing="40px" justify="center">
      <WrapItem
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
      >
        <Flex justify={"center"} mt={2} mb={2}>
          <Stack direction={"row"}>
            <Center w="100px">
              <Avatar
                size={"xl"}
                ml={5}
                src={LogoPerro}
                alt={"Perro categoria"}
                css={{
                  border: "2px solid white",
                }}
                bg={"brand.green"}
              />
            </Center>
            <Center w="100px">
              <Text ml={5} color="brand.white" textStyle="h4">
                Perros
              </Text>
            </Center>
          </Stack>
        </Flex>
      </WrapItem>
    </Wrap>
  );
};

export default CategorieItem;
