import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuCard",

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    return () => (
      <div class="w-[306px] h-[375px] flex flex-col items-center justify-center text-center p-6 border-2 border-[var(--gray-color)] rounded-xl shadow-sm">
        
        <img src={props.icon} alt={props.title} class="h-[80px] w-[80px] mb-4" />

        <h2 class="text-2xl font-semibold mb-2">
          {props.title}
        </h2>

        <p class="text-gray-600 text-sm mb-4">
          {props.description}
        </p>

        <button class="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
          Explore Menu
        </button>

      </div>
    );
  },
});