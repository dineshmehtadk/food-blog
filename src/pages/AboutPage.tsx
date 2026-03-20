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
             <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[610px] mx-auto">

  {[ 
    { value: "3", label: "Locations" },
    { value: "1998", label: "Founded" },
    { value: "92+", label: "Staff Members" },
    { value: "100%", label: "Satisfied Customers" },
  ].map((item, index) => (
    <div
      key={index}
      class="bg-white p-6 rounded-lg text-center flex flex-col items-center justify-center h-[140px] sm:h-[174px]"
    >
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-[--secondary-font]">
        {item.value}
      </h2>
      <span class="text-gray-600 text-sm">{item.label}</span>
    </div>
  ))}

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
