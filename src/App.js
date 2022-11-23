import "./App.css";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Product from "./components/products/Product";
import Blog from "./components/blogs/Blog";
import Branches from "./components/branches/Branches";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Product />
      <Blog />
      <Branches />
      <Contact />
    </>
  );
}

export default App;
