import { defineComponent } from "vue";
import TestimonialCard from "./TestomonialCard";

export default defineComponent({
  name: "Testimonial",
  setup() {
    const testimonials = [
      {
        title: "“The best restaurant”",
        description:
          "The culinary experience at Place is second to none. The atmosphere is vibrant, and the food is extraordinary.",
        image: "customer1.png",
      },
      {
        title: "“Simply delicious”",
        description:
          "We were blown away by the warm ambiance and delicious food. Every moment felt special.",
        image: "customer2.png",
      },
      {
        title: "“One of a kind restaurant”",
        description:
          "Place exceeded expectations with its cozy ambiance and beautifully presented dishes.",
        image: "customer3.png",
      },
    ];

    return () => (
      <section class="py-16">
        
        {/* Heading */}
        <div class="max-w-[1024px] mx-auto px-4 text-center">
          <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black">
            What Our Customers Say
          </h1>
        </div>

        {/* Cards */}
        <div class="max-w-[1024px] mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.title}
              title={testimonial.title}
              description={testimonial.description}
              profile={testimonial.image}
              userName="John Doe"
              userAddress="Food Blogger"
            />
          ))}
        </div>

      </section>
    );
  },
});