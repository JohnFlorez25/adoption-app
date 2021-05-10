import React from 'react';
import { useHistory } from "react-router-dom";
import VolverAtras from "../../images/flecha-atras.png";
import {
    Heading,
    Wrap,
    Image,
    Flex,
  } from "@chakra-ui/react";

const PetHeader = (props) => {
    
    let history = useHistory();

    const goBack = () => {
       history.push("/");
    }

    return (
        <Wrap ml={20} mt={10} spacing="40px">
          <Flex mt={5} mb={5} align={"center"} justify={"center"}>
            <Flex
              w={16}
              h={16}
              mr={10}
              align={"center"}
              justify={"center"}
              color={"white"}
              rounded={"full"}
              bg={"#0E172C"}
              cursor="pointer"
            >
              <Image onClick={goBack} w={10} h={10} src={VolverAtras} alt="flecha-atras" />
            </Flex>
            <Heading ml={10}>
              {props.title}
            </Heading>
            {/* <Text>{this.props.match.params.petId}</Text> */}
          </Flex>
        </Wrap>
    )
}

export default PetHeader
