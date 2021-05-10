import React, { Component } from "react";
import axios from "axios";
import {
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

localStorage.setItem('petCategorie', "dogs");

class AdoptionHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: localStorage.getItem('petCategorie'),
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
          <CategorieItem onClick={this.handleClickSection} />
          <CategorieList section={this.state.categorie} categories={this.state.data} />
        </VStack>
      </Flex>
    );
  }
}

export default AdoptionHome;
