import { RouterProvider } from "react-router-dom";
import router from "./Components/Router/Router";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <Container disableGutters maxWidth="">
      <Navbar></Navbar>
      <RouterProvider router={router}> </RouterProvider>

      <CssBaseline />
    </Container>
  );
}

export default App;
