import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceCard",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },

  setup(props) {
    return () => (
      <div class="w-full max-w-[300px] mx-auto flex flex-col text-center rounded-xl overflow-hidden hover:shadow-md transition duration-300">
        
        {/* Image */}
        <div class="overflow-hidden rounded-xl">
          <img
            src={props.image}
            alt={props.title}
            class="w-full h-[200px] md:h-[250px] object-cover transition duration-300 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div class="mt-4 px-2">
          <h2 class="text-lg md:text-2xl font-semibold mb-2">
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