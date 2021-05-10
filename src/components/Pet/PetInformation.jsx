import React from "react";
import HeartLog from "../../images/heart.png";
import Male from "../../images/male.png";
import Female from "../../images/female.png"
import Breed from "../../images/breed.png";
import Age from "../../images/age.png";
import Location from "../../images/location.png";

import {
    Text,
    Heading,
    Image,
    Flex,
    Spacer,
  } from "@chakra-ui/react";
import PetFav from "./PetFav";


const PetInformation = (props) => {
 
    const {
        name,
        breed,
        age,
        gender,
        location
    } = props;


  return (
    <Flex d="column">
      {/**Sección de nombre, genero y agregar a favoritos */}
      <Flex mt={5} mb={5} align={"center"} justify={"center"}>
        <Heading ml={10}>{name}</Heading>
        <Flex w={16} h={16} mr={10} ml={10} align={"center"} justify={"center"}>
          <Image src={gender === "male" ? Male : Female} alt="gender" />
        </Flex>
        <Spacer />
        <PetFav fullData={props.fullData} petId={props.petId}/>
        {/* <Text>{this.props.match.params.petId}</Text> */}
      </Flex>
      {/**Sección de Raza y edad de la mascota */}
      <Flex mt={10} mb={5} align={"center"} justify={"center"}>
        <Flex w={10} h={10} mr={3} ml={10} align={"center"} justify={"center"}>
          <Image src={Breed} alt="breed" />
        </Flex>
        <Text textStyle="h3" ml={1} mr={10}>
          {breed}
        </Text>
        <Flex w={10} h={10} mr={3} ml={10} align={"center"} justify={"center"}>
          <Image src={Age} alt="age" />
        </Flex>
        <Text textStyle="h3" ml={1}>
          {age} meses
        </Text>
        {/* <Text>{this.props.match.params.petId}</Text> */}
      </Flex>
      {/**Sección de localización de la mascota */}
      <Flex align={"center"} justify={"center"} mt={10}>
        <Flex w={10} h={10} mr={3} ml={10} align={"center"} justify={"center"}>
          <Image src={Location} alt="location" />
        </Flex>
        <Text textStyle="h3">{location}</Text>
      </Flex>
    </Flex>
  );
};

export default PetInformation;
