import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import About from "./pages/About/About";
import ServicesPage from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import PredictPage from "./pages/Predict/PredictPage";

function App() {
  return (
    <Router>
      {/* Everything Is Return In Components */}
      {/* if u wanna update anything look at the componets */}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/predict" element={<PredictPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
