import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "BlogItemCard",

  props: {
    date: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },

  setup(props) {
   

     const router = useRouter();


     function handleRedirect (){
      router.push({path:"/blog-details",query:props});

     }

    return () => (

      <div onClick={handleRedirect} class=" max-w-[306px] mx-auto flex flex-col text-center border border-[var(--gray-color)] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-105 transition duration-300">
        {/* Image */}
        <img
          src={props.image}
          alt={props.date}
          class="w-[306px] h-[200px] object-cover"
        />

        {/* Content */}
        <div class="p-6">
          <p class="text-sm mb-2 text-left text-[var(--font-color-light)]">
            {props.date}
          </p>

          <p class="text-gray-600 text-regular leading-relaxed text-left">
            {props.description}
          </p>
        </div>
      </div>
    );
  },
});
