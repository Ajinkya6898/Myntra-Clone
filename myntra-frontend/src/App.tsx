import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Product from "./components/screens/Product";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
