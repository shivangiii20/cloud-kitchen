import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import MainNavbar from "./components/MainNavbar";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MyAccount from "./pages/MyAccount";
import Cart from "./pages/Cart";




function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // trigger after 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!scrolled && <TopBar />}
      {!scrolled && <MainNavbar />}
      
      <MenuBar scrolled={scrolled} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      
    </>
  );
}

export default App;