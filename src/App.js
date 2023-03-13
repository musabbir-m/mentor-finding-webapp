import { RouterProvider } from "react-router-dom";
import router from "./Components/Router/Router";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Container disableGutters maxWidth="">
      <Navbar></Navbar>
      <RouterProvider router={router}> </RouterProvider>

      <CssBaseline />
      <Toaster/>
    </Container>
  );
}

export default App;
