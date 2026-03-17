import { defineComponent } from "vue";
import HeaderTopBar from "./HeaderTopBar";

export default defineComponent({
  name: "Header",
  setup() {
    return () => (
      <>

      <HeaderTopBar />
      <div class=" h-[55px] flex items-center justify-between px-20">
        <span><img class="w-[163px] h-[29px]" src="logo.png" alt="Logo" /></span>
        <nav class="flex items-center">
          <ul class="flex gap-4">
            <li><a href="#" class="text-[#000000]">Home</a></li>
            <li><a href="#" class="text-[#000000]">About</a></li>
            <li><a href="#" class="text-[#000000]">Menu</a></li>
            <li><a href="#" class="text-[#000000]">Blog</a></li>
            <li><a href="#" class="text-[#000000]">Contact</a></li>
          </ul> 

<button class="ml-4 px-4 py-2 text-[#000000] border border-[#000000] rounded-[118px]">
  Book a Table
</button>        </nav>
      </div>

      </>
      
    );
  },
});
