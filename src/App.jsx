import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/Component/Header/Header";
import Footer from "../src/Component/Footer/Footer";
import Home from "./Component/Pages/Home/Home";


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
