import React, { Component } from "react";
import HeartBlank from "../../images/heart.png";
import HeartSelected from "../../images/heart-selected.png";
import { Image, Flex } from "@chakra-ui/react";
import axios from 'axios';

export class PetFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        error: null,
        data: undefined,
        like: HeartBlank,
        likeActive: false,
    };
  }

  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
    });
  }

  handleLike() {
    this.setLike();
    
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.likeActive===true) && (prevState.likeActive !== this.state.likeActive) ){
      this.pushData(this.state.likeActive)
    }

    if ((this.state.likeActive===false) && (prevState.likeActive !== this.state.likeActive) ){
      this.popData(this.state.likeActive, this.props.petId)
    }
  }

  pushData(activate){
    if(activate===true){
        axios.post('http://localhost:3005/favorites', this.props.fullData)
        .then(favorite =>
            console.log("It's done")
        )
        .catch(error =>
            console.log("It's done")
        )
    }
  }

  popData(activate, petId){
    if(activate===false){
        this.setState({
            loading: true,
            error: null
          });
      
          this.axiosCancelSource = axios.CancelToken.source();
      
          axios
            .delete(
                `http://localhost:3005/favorites/${petId}`,
              { cancelToken: this.axiosCancelSource.token }
            )
            .then(res => {
              this.setState({
                loading: false,
                redirect: true,
                modalIsOpen: false
              });
            })
            .catch(error => {
              this.setState({
                loading: false,
                error: error
              });
            });
    }
  }

  render() {
    console.log(this.props.fullData)
    console.log(this.props.petId)
    return (
    
      <Flex
        w={16}
        h={16}
        mr={10}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        cursor="pointer"
        onClick={() => this.handleLike()}
      >
        <Image src={this.state.likeActive===true ? HeartSelected: HeartBlank } />
      </Flex>
    );
  }
}

export default PetFav;
