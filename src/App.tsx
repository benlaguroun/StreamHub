import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LiveTV from "./pages/LiveTV";
import Plans from "./pages/PlansPage";
import Dashboard from "./pages/Dashboard";
import MoviesShows from "./pages/MoviesShows";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-background"
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/live" element={<LiveTV />} />

            <Route path="/plans" element={<Plans />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/movies-shows" element={<MoviesShows />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
