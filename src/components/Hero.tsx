import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
  setup() {
    return () => (
      <section class="relative">
        <img
          src="hero-bg.png"
          alt="Hero Image"
          class="w-full h-auto"
        />

        <div class=" absolute inset-0 flex flex-col items-center justify-center text-center px-110">
          <h1 class="text-8xl font-[--secondary-font] mb-4 text-black">
            Best food for your taste
          </h1>

          <p class="text-black max-w-xl px-18">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>

          <div class="flex gap-4 justify-center mt-6">
            <button class="px-6 py-3 text-white bg-[#AD343E] rounded-full hover:opacity-90 transition">
              Book a Table
            </button>

            <button class="px-6 py-3 text-black bg-white border border-black rounded-full hover:bg-gray-100 transition">
              Explore Menu
            </button>
          </div>
        </div>
      </section>
    );
  },
});