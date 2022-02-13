import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import ShowCase from "./components/ShowCase/ShowCase";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Header />
      <ShowCase />
      <Testimonial />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
