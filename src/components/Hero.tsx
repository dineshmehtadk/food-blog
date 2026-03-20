import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Hero",
  setup() {
    const router = useRouter();

    function handleBooking() {
      router.push("/booking");
    }

    function handleMenuList() {
      router.push("/menu");
    }
    return () => (
      <section class="relative">
        {/* Background Image */}
        <img
          src="hero-bg.png"
          alt="Hero Image"
          class="w-full h-[400px] md:h-[600px] object-cover"
        />

        {/* Overlay Content */}
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-20">
          <h1 class="text-3xl sm:text-5xl md:text-7xl font-[--secondary-font] mb-4 text-black">
            Best food for your taste
          </h1>

          <p class="text-black max-w-xl text-sm md:text-base mb-6">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBooking}
              class="px-6 py-3 text-white bg-[#AD343E] rounded-full hover:opacity-90 transition"
            >
              Book a Table
            </button>

            <button
              onClick={handleMenuList}
              class="px-6 py-3 text-black bg-white border border-black rounded-full hover:bg-gray-100 transition"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </section>
    );
  },
});
