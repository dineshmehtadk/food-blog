import { defineComponent } from "vue";
import Header from "../components/Header/Header";

import About from "../components/About";

import Footer from "../components/Footer";

export default defineComponent({
  name: "Home",
  setup() {
    return () => (
      <>
        <Header />

        <About />

        <section class="bg-[var(--light-gray-color)] ">
          <div class="flex flex-col lg:flex-row  gap-12 max-w-[1296px] mx-auto py-16 px-8 md:px-8">
            {/* Left Content */}
            <div class="flex-1 ">
              <div class="">
                <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black mb-12 ">
                  A little information for our valuable guest
                </h1>

                <p class="text-gray-600 mb-18">
                  At place, we believe that dining is not just about food, but
                  also about the overall experience. Our staff, renowned for
                  their warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>
              </div>

              {/* Stats Grid */}
              <div class="grid grid-cols-2 gap-4 w-[610px]">
                <div class="bg-white p-6 rounded-lg text-center w-[293px] h-[174px] flex flex-col items-center justify-center">
                  <h2 class="text-2xl md:text-4xl font-[--secondary-font]]">
                    3
                  </h2>
                  <span class="text-gray-600 text-sm">Locations</span>
                </div>

                <div class="bg-white p-6 rounded-lg text-center w-[293px] h-[174px] flex flex-col items-center justify-center">
                  <h2 class="text-2xl md:text-4xl font-[--secondary-font]">
                    1998
                  </h2>
                  <span class="text-gray-600 text-sm">Founded</span>
                </div>

                <div class="bg-white p-6 rounded-lg text-center w-[293px] h-[174px] flex flex-col items-center justify-center">
                  <h2 class="text-2xl md:text-4xl font-[--secondary-font]">
                    92+
                  </h2>
                  <span class="text-gray-600 text-sm">Staff Members</span>
                </div>

                <div class="bg-white p-6 rounded-lg text-center w-[293px] h-[174px] flex flex-col items-center justify-center">
                  <h2 class="text-2xl md:text-4xl font-[--secondary-font]">
                    100%
                  </h2>
                  <span class="text-gray-600 text-sm">Satisfied Customers</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div class="flex-1 ">
              <img
                src="about-info.png"
                alt="about info"
                class="w-[555px] h-[680px]rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  },
});
