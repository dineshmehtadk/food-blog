import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    return () => (
      <section class="flex items-center gap-16 px-20 py-20 bg-[var(--gray-color)]">
        <div class="relative w-1/2">
          <img
            src="about-image.png"
            alt="About Image"
            class="w-full rounded-lg"
          />

          <div class="absolute bottom-[-30px] right-[-30px] bg-[#474747] text-white p-6 rounded-lg w-[411px] h-[321px]">
            <h3 class="text-lg font-semibold mb-3">Come and Visit us</h3>

            <div class="flex flex-col gap-2 text-sm">
              <div class="flex items-center gap-2">
                <img src="phone.png" class="w-4 h-4" />
                <span>+92 342 2999122</span>
              </div>

              <div class="flex items-center gap-2">
                <img src="mail.png" class="w-4 h-4" />
                <span>info@example.com</span>
              </div>

              <div class="flex items-center gap-2">
                <img src="location-marker.png" class="w-4 h-4" />
                <span>
                  837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div class="w-1/2 flex flex-col gap-6 px-6">
          <h1 class="text-6xl font-[--secondary-font] text-black">
            We provide healthy food for your family.
          </h1>

          <p class="text-gray-700">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in the city's rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>

          <p class="text-gray-700">
            At Place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit unforgettable.
          </p>

          <button class="w-fit px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
            More About Us
          </button>
        </div>
      </section>
    );
  },
});
