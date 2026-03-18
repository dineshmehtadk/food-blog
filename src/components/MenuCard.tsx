import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuCard",

  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
  },

  setup(props) {
    return () => (
      <div class="w-full max-w-[300px] mx-auto flex flex-col items-center text-center p-6 border border-[var(--gray-color)] rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition duration-300">
        
        {/* Icon */}
        <img
          src={props.icon}
          alt={props.title}
          class="h-[60px] w-[60px] md:h-[80px] md:w-[80px] mb-4 object-contain"
        />

        {/* Title */}
        <h2 class="text-lg md:text-2xl font-semibold mb-2">
          {props.title}
        </h2>

        {/* Description */}
        <p class="text-gray-600 text-sm mb-6 leading-relaxed">
          {props.description}
        </p>

        {/* Button */}
        <button class="mt-auto px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
          Explore Menu
        </button>

      </div>
    );
  },
});