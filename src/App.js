import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contries } from "./components/Contries";
import { Navbar } from "./components/Navbar";
import Users from "./components/Users";
import { Home } from "./components/Home";
import { Cards } from "./components/Cards";
import { Alboms } from "./components/Alboms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contries" element={<Contries />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/alboms" element={<Alboms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
