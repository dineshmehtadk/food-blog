import { defineComponent } from "vue";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import About from "../components/About";
import Service from "../components/Service";
import Testomonial from "../components/Testomonial";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default defineComponent({
  name: "Home",
  setup() {
    return () => (
        <>
        <Header />
        <Hero />
        <Menu />
        <About />
        <Service />
        <Testomonial />
        <Blog />
        <Footer />
      
      </>
    );
  },
});