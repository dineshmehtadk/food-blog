import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItemCard",

  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  },

  setup(props) {
    return () => (
      <div class="w-full max-w-[306px] mx-auto flex flex-col text-center border border-[var(--gray-color)] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-105 transition duration-300">
        
        {/* Image */}
        <img
          src={props.image}
          alt={props.title}
          class="w-full h-[220px] object-cover"
        />

        {/* Content */}
        <div class="p-4">
          
          <h2 class="text-lg md:text-2xl font-semibold mb-2 text-[var(--brown-color)]">
            ${` ${props.price}`}
          </h2>

          <h2 class="text-lg md:text-xl font-semibold mb-2">
            {props.title}
          </h2>

          <p class="text-gray-600 text-sm leading-relaxed">
            {props.description}
          </p>

        </div>

      </div>
    );
  },
});