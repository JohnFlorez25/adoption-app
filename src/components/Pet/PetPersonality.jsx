import React from "react";
import {
    Box,
    Text,
    Heading,
    Wrap,
    WrapItem,
    Image,
    Flex,
    Stack,
  } from "@chakra-ui/react";
const PetPersonality = (props) => {
  return (
    /**Sección de Personalidad */
    <Box mt={10}>
      <Heading>Personalidad</Heading>
      <Wrap spacing="40px" justify={"center"} mt={10} mb={2}>
        {
          props.personality.map( (personality, index) => {
            return (
              <WrapItem key={`${index}+${personality.skill}`}>
              <Stack
                w="150px"
                h="120px"
                bg={"brand.white"}
                boxShadow={"2xl"}
                rounded={"md"}
                css={{
                  border: "2px solid #A786DF",
                }}
              >
                <Flex
                  w={16}
                  h={16}
                  mt={2}
                  mr={10}
                  ml={10}
                  align={"center"}
                  justify={"center"}
                >
                  <Image src={personality.imageSkill} alt={personality.skill} />
                </Flex>
                <Text ml={5} color="brand.black" textStyle="h3">
                  {personality.skill} 
                </Text>
              </Stack>
            </WrapItem>
           
            )
          })
        }
      </Wrap>
    </Box>
  );
};

export default PetPersonality;
