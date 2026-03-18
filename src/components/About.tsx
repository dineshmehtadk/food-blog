import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    return () => (
      <section class="bg-[var(--gray-color)] py-16">
        
        <div class="max-w-[1024px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Section */}
          <div class="relative w-full lg:w-1/2">
            <img
              src="about-image.png"
              alt="About Image"
              class="w-full rounded-lg object-cover"
            />

            {/* Contact Card */}
            <div class="absolute bottom-[-20px] right-0 md:right-[-20px] bg-[#474747] text-white p-6 rounded-lg w-[90%] md:w-[350px]">
              
              <h3 class="text-lg font-semibold mb-4">
                Come and Visit us
              </h3>

              <div class="flex flex-col gap-3 text-sm">
                
                <div class="flex items-center gap-3">
                  <img src="phone.png" class="w-[20px] h-[20px]" />
                  <span>+92 342 2999122</span>
                </div>

                <div class="flex items-center gap-3">
                  <img src="mail.png" class="w-[20px] h-[20px]" />
                  <span>info@example.com</span>
                </div>

                <div class="flex items-start gap-3">
                  <img src="location-marker.png" class="w-[20px] h-[20px]" />
                  <span>
                    837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Content Section */}
          <div class="w-full lg:w-1/2 flex flex-col gap-6">
            
            <h1 class="text-3xl md:text-5xl font-[--secondary-font] text-black">
              We provide healthy food for your family.
            </h1>

            <p class="text-gray-700">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant ambiance.
            </p>

            <p class="text-gray-700">
              At Place, we believe dining is not just about food, but also the
              overall experience. Our team strives to make every visit unforgettable.
            </p>

            <button class="w-fit px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              More About Us
            </button>

          </div>
        </div>

      </section>
    );
  },
});