import { defineComponent, ref } from "vue";
import HeaderTopBar from "./HeaderTopBar";

export default defineComponent({
  name: "Header",
  setup() {
    const open = ref(false);

    return () => (
      <>
        <HeaderTopBar />

        <div class="h-[55px] flex items-center justify-between px-6 md:px-20">
          
          {/* Logo */}
          <img class="w-[163px] h-[29px]" src="logo.png" alt="Logo" />

          {/* Desktop Nav */}
          <nav class="hidden md:flex items-center">
            <ul class="flex gap-6">
              <li><a href="#" class="text-black">Home</a></li>
              <li><a href="#" class="text-black">About</a></li>
              <li><a href="#" class="text-black">Menu</a></li>
              <li><a href="#" class="text-black">Blog</a></li>
              <li><a href="#" class="text-black">Contact</a></li>
            </ul>

            <button class="ml-6 px-4 py-2 border border-black rounded-full">
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
            <button
              class="text-2xl"
              onClick={() => (open.value = false)}
            >
              ✕
            </button>
          </div>

          {/* Menu */}
          <ul class="flex flex-col gap-6 px-6 text-lg">
            <li><a href="#" onClick={() => (open.value = false)}>Home</a></li>
            <li><a href="#" onClick={() => (open.value = false)}>About</a></li>
            <li><a href="#" onClick={() => (open.value = false)}>Menu</a></li>
            <li><a href="#" onClick={() => (open.value = false)}>Blog</a></li>
            <li><a href="#" onClick={() => (open.value = false)}>Contact</a></li>
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