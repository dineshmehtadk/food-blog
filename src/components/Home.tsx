import { defineComponent } from "vue";
import Header from "./Header/Header";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";

export default defineComponent({
  name: "Home",
  setup() {
    return () => (
        <>
        <Header />
        <Hero />
        <Menu />
        <About />
      <div>
        <h1 class="font-color-red">Welcome to the Home Page!</h1>
        <p>This is the main landing page of our application.</p>
      </div>
      </>
    );
  },
});