import React, { Component } from "react";
import axios from 'axios';
import { Center, Box, Heading, Text } from "@chakra-ui/react";

export default class PetHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  fetchPetData = () => {
    this.setState({
        loading: true,
        error: null
    })

    axios
        .get(`http://localhost:3004/${this.props.match.params.section}/${this.props.match.params.petId}`)
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
    this.fetchPetData()
  }

  render() {

    if( this.state.loading === true && !this.state.data){
        return <h1>Cargando...</h1>
    }

    if(this.state.error){
        return <h1> Ups! tenemos problemas :/</h1>
    }
    
    console.log(`http://localhost:3004/${this.props.match.params.section}/${this.props.match.params.petId}`)
    return (
      <Center>
        <Box mt={400} fontSize="6xl" p={4} color="white">
        <Heading>{this.state.data.name}</Heading>
        <Heading>{this.state.data.breed}</Heading>
        </Box>
      </Center>
    );
  }
}
