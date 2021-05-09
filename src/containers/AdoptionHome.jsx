import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Stack,
  Heading,
  Text,
  Spinner,
  Center,
  Box,
  Flex,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import CategorieItem from "../components/CategorieItem";
import CategorieList from "../components/CategorieList";

class AdoptionHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: "dogs",
      loading: true,
      error: null,
      data: undefined,
    };
  }

  handleClickSection = (e, section) => {
    console.log(section);
    e.preventDefault();
    this.selectCategorie(section);
  };

  selectCategorie = (section) => {
    this.setState({
      categorie: section,
    });
  };

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.categorie !== this.state.categorie) {
      this.fetchData();
    }
  }

  //Capturando la data de nuestra petición
  fetchData = () => {
    this.setState({
      loading: true,
      error: null,
    });

    this.axiosCancelSource = axios.CancelToken.source();

    axios
      .get(`http://localhost:3005/${this.state.categorie}`, {
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
      <Container maxW="xl">
        <Stack>
          <Heading>Adopta una adorable mascota</Heading>
          <Text textStyle="h3">Categoría de mascotas</Text>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <CategorieItem onClick={this.handleClickSection} />
            <CategorieList categories={this.state.data} />
          </VStack>
        </Stack>
      </Container>
    );
  }
}

export default AdoptionHome;
