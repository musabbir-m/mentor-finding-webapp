import { RouterProvider } from "react-router-dom";
import router from "./Components/Router/Router";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  return (
    <Container disableGutters maxWidth="">
      <RouterProvider router={router}> </RouterProvider>

      <CssBaseline />
    </Container>
  );
}

export default App;
