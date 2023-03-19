import { RouterProvider } from "react-router-dom";
import router from "./Components/Router/Router";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { Container, StyledEngineProvider } from "@mui/system";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Container disableGutters maxWidth="">
        <RouterProvider router={router}> </RouterProvider>

        <CssBaseline />
        <Toaster />
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
