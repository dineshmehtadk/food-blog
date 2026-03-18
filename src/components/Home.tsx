import { defineComponent } from "vue";
import Header from "./Header/Header";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";
import Service from "./Service";
import Testomonial from "./Testomonial";
import Blog from "./Blog";
import Footer from "./Footer";

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