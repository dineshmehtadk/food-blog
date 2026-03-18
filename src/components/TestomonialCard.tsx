import { defineComponent } from "vue";

export default defineComponent({
  name: "TestimonialCard",

  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    profile: { type: String, required: true },
    userName: { type: String, required: true },
    userAddress: { type: String, required: true },
  },

  setup(props) {
    return () => (
      <div class="w-full max-w-[300px] mx-auto flex flex-col p-6 bg-[var(--light-gray-color)] rounded-xl shadow-sm hover:shadow-md transition duration-300">
        
        {/* Title */}
        <h2 class="text-xl font-semibold mb-2 text-[var(--brown-color)]">
          {props.title}
        </h2>

        {/* Description */}
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
          {props.description}
        </p>

        {/* Divider */}
        <div class="w-full h-[1px] bg-gray-300 my-4"></div>

        {/* User Info */}
        <div class="flex items-center gap-4">
          <img
            src={props.profile}
            alt={props.userName}
            class="h-[60px] w-[60px] rounded-full object-cover"
          />

          <div>
            <h3 class="text-base font-semibold">{props.userName}</h3>
            <p class="text-gray-500 text-sm">{props.userAddress}</p>
          </div>
        </div>

      </div>
    );
  },
});