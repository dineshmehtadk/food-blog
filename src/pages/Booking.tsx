import { defineComponent } from "vue";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default defineComponent({
  name: "Booking",
  setup() {
    return () => (
      <>
        <Header />

        <section>
          <div class="max-w-full mx-auto py-16  relative mb-[95px]">

            {/* Heading */}
            <div class="text-center mb-20">
              <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black mb-6">
                Book A Table
              </h1>
              <p class="max-w-[600px] mx-auto">
                We consider all the drivers of change gives you the components
                you need to create something truly impactful.
              </p>
            </div>

            {/* Main Container (for layering) */}
            <div class="relative flex justify-center">

              {/* Map (Background) */}
              <img
                src="map.png"
                alt="map"
                class="absolute top-[120px] left-0 w-full z-0 opacity-80"
              />

              {/* Form (Foreground) */}
              <div class="relative z-50 bg-white border border-gray-300 rounded-xl w-[812px] p-12 shadow-lg mb-65">

                {/* Row 1 */}
                <div class="flex gap-6 mb-6">
                  <div class="flex flex-col w-full">
                    <label class="text-sm mb-1 font-medium">Date</label>
                    <input
                      type="date"
                      class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                    />
                  </div>

                  <div class="flex flex-col w-full">
                    <label class="text-sm mb-1 font-medium">Time</label>
                    <input
                      type="time"
                      class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div class="flex gap-6 mb-6">
                  <div class="flex flex-col w-full">
                    <label class="text-sm mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                    />
                  </div>

                  <div class="flex flex-col w-full">
                    <label class="text-sm mb-1 font-medium">Phone</label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div class="mb-8">
                  <label class="text-sm mb-1 font-medium block">
                    Total Person
                  </label>
                  <select class="w-full border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

                {/* Button */}
                <div class="flex justify-center">
                  <button class="px-8 py-3 bg-[var(--brown-color)] text-white rounded-full hover:bg-black transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  },
});