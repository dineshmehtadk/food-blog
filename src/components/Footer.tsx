import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    return () => (
      <section class="bg-[#474747] text-white py-16">
        
        <div class="max-w-[1024px] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About */}
          <div>
            <div class="flex items-center gap-2">
              <img src="logo-white.png" class="h-[45px]" alt="logo" />
              <img src="logo-title.png" class="h-[24px]" alt="logo title" />
            </div>

            <p class="text-sm leading-relaxed mt-6 text-[var(--gray-color)]">
              In the new era of technology, we look to the future with certainty
              and pride for our company.
            </p>

            <div class="flex gap-3 mt-6">
              {[1, 2, 3, 4].map((icon) => (
                <span class="bg-[#AD343E] rounded-full p-2 flex items-center justify-center hover:scale-110 transition">
                  <img src={`${icon}.png`} class="w-[16px] h-[16px]" />
                </span>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 class="font-semibold mb-4">Pages</h3>
            <ul class="space-y-2 text-sm">
              {["Home", "Menu", "About", "Pricing", "Blog", "Contact", "Delivery"].map((item) => (
                <li class="text-[var(--gray-color)] hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Utility */}
          <div>
            <h3 class="font-semibold mb-4">Utility Pages</h3>
            <ul class="space-y-2 text-sm">
              {[
                "Start Here",
                "Styleguide",
                "Password Protected",
                "404 Not Found",
                "Licenses",
                "Changelog",
                "View More",
              ].map((item) => (
                <li class="text-[var(--gray-color)] hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram */}
          <div>
            <h3 class="font-semibold mb-4">Follow Us On Instagram</h3>

            <div class="grid grid-cols-2 gap-3">
              {["insta-1.png", "insta-2.png", "insta-3.png", "insta-4.png"].map(
                (img, i) => (
                  <img
                    src={img}
                    alt={`Instagram ${i + 1}`}
                    class="w-full aspect-square object-cover rounded-lg hover:scale-105 transition"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p class="text-center text-[var(--gray-color)] mt-12 text-sm">
          © 2026 Hashtag Developer. All Rights Reserved
        </p>

      </section>
    );
  },
});