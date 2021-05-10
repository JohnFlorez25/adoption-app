import React, { Component } from "react";
import axios from 'axios';
import { Flex, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";

import CategorieItem from "../components/CategorieItem";

export default class AdoptionHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  fetchPetsData = () => {
    this.setState({
        loading: true,
        error: null
    })

    axios
        .get("http://localhost:3004/dogs")
        .then( res => {
            this.setState({
                loading:false,
                data : res.data
            })
        })
        .catch( err => {
            this.setState({
                loading: false,
                error: err
            })
        }) 
  }
  
  componentDidMount() {
    this.fetchPetsData()
  }

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
