import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="sm">
      <UserList />
    </Container>
  );
}

export default App;
