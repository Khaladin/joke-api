import React from 'react';
import { Box, Container, Divider } from "@mui/material";

import './App.css';

import Joke from "./components/Joke";
import Header from "./components/Header";


function App() {
  return (
    <Container className="App" maxWidth={"lg"}>
      <Box>
        <Header />
        <Divider />
        <Joke />
      </Box>
    </Container>
  );
}

export default App;
