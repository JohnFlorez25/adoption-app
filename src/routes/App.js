import React from "react";
//Containers Pages about adoption app
import AdoptionHome from "../containers/AdoptionHome.jsx";
import PetHome from "../containers/PetHome.jsx";
import PetFavoriteHome from "../containers/PetFavoriteHome.jsx";

//Import in relation with Chakra UI
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/400.css";
import Layout from "../components/Layout.jsx";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FEC7D7",
      },
    },
  },
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  colors: {
    brand: {
      primary: "#FEC7D7",
      secondary: "#A786DF",
      tertiary: "#D9D4E7",
      green: "#85D1CE",
      blue: "#91C1D7",
      white: "#FFFFFE",
      black: "#0E172C",
    },
    background: "#FEC7D7",
  },
  textStyles: {
    h3: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24.55px",
      letterSpacing: "0.15%",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.5%",
    },
    h5: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "19.1px",
      letterSpacing: "0.5%",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.5%",
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/:section/:petId" component={PetHome} />
          <Route>
            <Layout>
              <Switch>
                <Route exact path="/" component={AdoptionHome} />
                <Route path="/favorites" component={PetFavoriteHome} />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
