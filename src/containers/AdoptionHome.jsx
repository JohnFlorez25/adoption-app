import React, { Component } from "react";
import axios from 'axios';
import { Flex, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";

import CategorieItem from "../components/CategorieItem";
import CategorieList from "../components/CategorieList";

localStorage.setItem('petCategorie', "dogs");

export default class AdoptionHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: localStorage.getItem('petCategorie'),   
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
        .get(`http://localhost:3004/${this.state.categorie}`)
        .then( res => {
            this.setState({
                loading:false,
                data : res.data
            })
        })
        .catch( error => {
            this.setState({
                loading: false,
                error: error
            })
        }) 
  }
  
  componentDidMount() {
    this.fetchPetsData()
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.categorie !== this.state.categorie){
        this.fetchPetsData()
    }
  }

  handleClickSelection = (e, section) => {
    e.preventDefault()
    this.setState({
        categorie: section
    })
  }

  render() {

    if( this.state.loading === true && !this.state.data){
        return <h1>Cargando...</h1>
    }

    if(this.state.error){
        return <h1> Ups! tenemos problemas :/</h1>
    }


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
          <CategorieItem onClick={this.handleClickSelection} />
          <CategorieList section={this.state.categorie} categories={this.state.data} />
        </VStack>
      </Flex>
    );
  }
}
