import React, { Component } from "react";
import axios from "axios";
import PetHeader from "../components/Pet/PetHeader.jsx";
import PetMain from "../components/Pet/PetMain";
import PetImage from "../components/Pet/PetImage";
import PetDetail from "../components/Pet/PetDetail.jsx";
import PetInformation from "../components/Pet/PetInformation";
import PetPersonality from "../components/Pet/PetPersonality";
import PetHistory from "../components/Pet/PetHistory";

import { Box, Flex, Center, Spinner, Text } from "@chakra-ui/react";

export default class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      loading: true,
      error: null,
    });

    this.axiosCancelSource = axios.CancelToken.source();

    axios
      .get(
        `http://localhost:3005/${this.props.match.params.section}/${this.props.match.params.petId}`,
        { cancelToken: this.axiosCancelSource.token }
      )
      .then((res) => {
        this.setState({
          loading: false,
          data: res.data,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error,
        });
      });
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return (
        <Flex mt={400} align="center" justify="center">
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="brand.secondary"
              size="xl"
            />
          </Center>
        </Flex>
      );
    }

    if (this.state.error) {
      return (
        <Center>
          <Box mt={400} fontSize="6xl" p={4} color="white">
            <Text>"Ups! tenemos problemas =/"</Text>
          </Box>
        </Center>
      );
    }

    console.log(this.state.data);

    return (
      <Box>
        {/**Cabecera del detalle de la mascota */}
        <PetHeader title={`Detalle Mascota - ${this.state.data.name}`} />

        {/**Información general de la mascota*/}
        <PetMain>
          <PetImage
            image={this.state.data.imageUrl}
            imageAlt={this.state.data.imageAlt}
          />
          <PetDetail>
            <PetInformation
              name={this.state.data.name}
              breed={this.state.data.breed}
              age={this.state.data.details.age}
              gender={this.state.data.details.gender}
              location={this.state.data.details.location}
              fullData={this.state.data}
              petId={this.state.data.id}
            />
            <PetPersonality personality={this.state.data.details.personality} />
            <PetHistory 
                name={this.state.data.name} 
                history= {this.state.data.details.history}/>
          </PetDetail>
        </PetMain>
      </Box>
    );
  }
}
