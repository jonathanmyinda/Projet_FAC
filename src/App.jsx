import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";


export default function App() {
return (
<div className="flex flex-col min-h-screen bg-gray-100">
<Navbar />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/donate" element={<Donate />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</div>
);
}