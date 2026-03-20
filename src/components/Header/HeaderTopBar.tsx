import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderTopBar",
  setup() {
    return () => (
      <div class="bg-[#474747] w-full py-2 px-4 sm:px-6 lg:px-12">

        <div class="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">

          {/* Left */}
          <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[#F9F9F7] text-xs sm:text-sm">

            <div class="flex items-center gap-2">
              <img src="phone.png" alt="Phone" class="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span>+91 972054644</span>
            </div>

            <div class="flex items-center gap-2">
              <img src="mail.png" alt="Email" class="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span class="break-all sm:break-normal">yummy@bite.com</span>
            </div>

          </div>

          {/* Right (Social Icons) */}
          <div class="flex gap-2 sm:gap-3 mt-1 sm:mt-0">

            {["1.png", "2.png", "3.png", "4.png"].map((icon, index) => (
              <img
                key={index}
                src={icon}
                class="w-5 h-5 sm:w-7 sm:h-7 cursor-pointer hover:scale-110 transition"
              />
            ))}

          </div>

        </div>
      </div>
    );
  },
});