import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import HeaderTopBar from "./HeaderTopBar";

export default defineComponent({
  name: "Header",
  setup() {
    const open = ref(false);
    const router = useRouter();

    function handleBooking() {
      router.push("/booking");
    }

    return () => (

      <>
        <HeaderTopBar />

        <div class="h-[55px] flex items-center justify-between px-6 md:px-20">
          {/* Logo */}
          <img class="w-[163px] h-[29px]" src="logo.png" alt="Logo" />

          {/* Desktop Nav */}
          <nav class="hidden md:flex items-center">
            <ul class="flex gap-6">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="about">About</router-link>
              </li>
              <li>
                <router-link to="menu">Menu</router-link>
              </li>
              <li>
                <router-link to="blog">Blog</router-link>
              </li>
              <li>
                <router-link to="contact">Contact</router-link>
              </li>
            </ul>

            <button onClick={handleBooking} class="ml-6 px-4 py-2 border border-black rounded-full">
              Book a Table
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            class="md:hidden text-2xl"
            onClick={() => (open.value = true)}
          >
            ☰
          </button>
        </div>

        {/* Overlay */}
        {open.value && (
          <div
            class="fixed inset-0 bg-black/50 z-40"
            onClick={() => (open.value = false)}
          />
        )}

        {/* Sidebar */}
        <div
          class={`fixed top-0 right-0 h-full w-[260px] bg-white z-50 transform transition-transform duration-300 ${
            open.value ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div class="flex justify-end p-4">
            <button class="text-2xl" onClick={() => (open.value = false)}>
              ✕
            </button>
          </div>

          {/* Menu */}
          <ul class="flex flex-col gap-6 px-6 text-lg">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="about">About</router-link>
            </li>
            <li>
              <router-link to="menu">Menu</router-link>
            </li>
            <li>
              <router-link to="blog">Blog</router-link>
            </li>
            <li>
              <router-link to="contact">Contact</router-link>
            </li>
          </ul>

          <div class="px-6 mt-6">
            <button class="w-full px-4 py-2 border border-black rounded-full">
              Book a Table
            </button>
          </div>
        </div>
      </>
    );
  },
});
