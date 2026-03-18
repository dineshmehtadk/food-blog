import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogCard",
  props: {
    date: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },

  setup(props) {
    return () => (
      <div class="w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-300 cursor-pointer">
        
        {/* Image */}
        <img
          src={props.image}
          alt={props.date}
          class="w-full h-[180px] md:h-[200px] object-cover"
        />

        {/* Content */}
        <div class="p-4 text-left">
          <h2 class="text-sm text-gray-500 mb-2">
            {props.date}
          </h2>

          <p class="text-base font-medium line-clamp-2">
            {props.description}
          </p>
        </div>

      </div>
    );
  },
});