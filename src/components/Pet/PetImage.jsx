import React from "react";

import {
    WrapItem,
    Image,
} from "@chakra-ui/react";


const PetImage = (props) => {
  return (
    <WrapItem>
      <Image
        height={800}
        width={500}
        src={props.image}
        alt={props.imageAlt}
      />
    </WrapItem>
  );
};

export default PetImage;
