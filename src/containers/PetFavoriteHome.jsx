import React, { Component } from "react";
import axios from "axios";
import VolverAtras from "../images/flecha-atras.png";
import PetFavList from "../components/Pet/PetFavList";

import {
  Image,
  Heading,
  Text,
  Flex,
  VStack,
  StackDivider,
  Center,
  Spinner,
  Box,
  Spacer
} from "@chakra-ui/react";

export class PetFavoriteHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }
  
  handleBack() {
    this.props.history.push('/');
  }


  componentDidMount() {
    this.fetchData();
  }

  //Capturando la data de nuestra petición
  fetchData = () => {
    this.setState({
      loading: true,
      error: null,
    });

    this.axiosCancelSource = axios.CancelToken.source();

    axios
      .get(`http://localhost:3005/favorites`, {
        cancelToken: this.axiosCancelSource.token,
      })
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

  componentWillUnmount() {
    this.axiosCancelSource.cancel("Componente desmontado.");
  }

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
    return (
      <Flex direction="column" mt="2" alignItems="center">
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
            <Image onClick={()=>this.handleBack()} w={10} h={10} src={VolverAtras} alt="flecha-atras" />
          </Flex>
          <Heading mt="5" mb="5">
            Mascotas Favoritas
          </Heading>
        </Flex>

        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="center"
        >
          <PetFavList pets={this.state.data} />
        </VStack>
      </Flex>
    );
  }
}

export default PetFavoriteHome;
