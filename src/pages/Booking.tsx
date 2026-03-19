import { defineComponent } from "vue";
import Header from "../components/Header/Header";

import Footer from "../components/Footer";
import MenuItemCard from "@/components/MenuItemCard";

export default defineComponent({
  name: "Booking",
  setup() {
    return () => (
      <>
        <Header />
        <section>
          <div class="max-w-[1296px] mx-auto py-16 px-12">
            <div class="text-center align-item-center mb-20">
              <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black mb-6 ">
                Book A Table{" "}
              </h1>
              <p class="px-93">
                We consider all the drivers of change gives you the components
                you need to change to create a truly happens.
              </p>{" "}
            </div>
            <div class="flex justify-center">
                   <div class="bg-white border border-gray-300 rounded-xl w-[812px] p-10 shadow-md">
              {/* Row 1 */}
              <div class="flex gap-6 mb-6">
                <div class="flex flex-col w-full">
                  <label class="text-sm mb-1 font-medium">Date</label>
                  <input
                    type="date"
                    class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-brown-400"
                  />
                </div>

                <div class="flex flex-col w-full">
                  <label class="text-sm mb-1 font-medium">Time</label>
                  <input
                    type="time"
                    class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-brown-400"
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
                    class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-brown-400"
                  />
                </div>

                <div class="flex flex-col w-full">
                  <label class="text-sm mb-1 font-medium">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-brown-400"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div class="mb-8">
                <label class="text-sm mb-1 font-medium block">
                  Total Person
                </label>
                <select class="w-full border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-brown-400">
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
