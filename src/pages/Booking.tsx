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
          <div class="max-w-[1296px] mx-auto py-12 sm:py-16 px-4 sm:px-6 relative mb-[95px]">

            {/* Heading */}
            <div class="text-center mb-12 sm:mb-20">
              <h1 class="text-3xl sm:text-4xl md:text-6xl font-[--secondary-font] text-black mb-4">
                Book A Table
              </h1>
              <p class="max-w-[600px] mx-auto text-sm sm:text-base text-gray-600">
                We consider all the drivers of change gives you the components
                you need to create something truly impactful.
              </p>
            </div>

            {/* Container */}
            <div class="relative flex justify-center">

              {/* Map */}
              <img
                src="map.png"
                alt="map"
                class="absolute top-[80px] sm:top-[120px] left-0 w-full h-[250px] sm:h-[400px] object-cover z-0 opacity-70 rounded-xl"
              />

              {/* Form */}
              <div class="relative z-50 bg-white border border-gray-300 rounded-xl w-full max-w-[812px] p-4 sm:p-8 md:p-10 shadow-lg">

                {/* Row 1 */}
                <div class="flex flex-col sm:flex-row gap-4 mb-6">
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
                <div class="flex flex-col sm:flex-row gap-4 mb-6">
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
                <div class="mb-6">
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
                  <button class="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[var(--brown-color)] text-white rounded-full hover:bg-black transition duration-300">
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