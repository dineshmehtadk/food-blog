import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderTopBar",
  setup() {
    return () => (
      <div class="bg-[#474747] h-[45px] flex items-center justify-between px-20">
        <div class="flex gap-[25px] text-[#F9F9F7] text-sm">
          <div class="flex items-center gap-[8px]">
            {" "}
            <img src="phone.png" alt="Phone" class="w-[18px] h-[18px]" />
            <span>+91 972054644</span>
          </div>
          <div class="flex items-center gap-[8px]">
            {" "}
            <img src="mail.png" alt="Email" class="w-[18px] h-[18px]" />
            <span>yummy@bite.com</span>
          </div>
        </div>

        <div class="flex gap-2 text-[#F9F9F7]">
          {/* social icons placeholder */}
          <span>
            <img src="1.png" alt="Twitter" class="w-[27px] h-[27px]" />
          </span>
          <span>
            <img src="2.png" alt="Facebook" class="w-[27px] h-[27px]" />
          </span>
          <span>
            <img src="3.png" alt="Instagram" class="w-[27px] h-[27px]" />
          </span>
          <span>
            <img src="4.png" alt="GitHub" class="w-[27px] h-[27px]" />
          </span>
        </div>
      </div>
      
    );
  },
});
