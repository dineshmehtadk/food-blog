import { defineComponent } from "vue";
import ServiceCard from "./ServiceCard";

export default defineComponent({
  name: "Service",
  setup() {
    const services = [
      {
        title: "Caterings",
        description:
          "In the new era of technology we look in the future with certainty for life.",
        image: "service-1.png",
      },
      {
        title: "Birthday",
        description: "Delicious food options for your guests.",
        image: "service-2.png",
      },
      {
        title: "Weddings",
        description: "Find the perfect venue for your event.",
        image: "service-3.png",
      },
      {
        title: "Events",
        description:
          "In the new era of technology we look in the future with certainty for life.",
        image: "service-4.png",
      },
    ];

    return () => (
      <section class="py-16">
        
        {/* Top Section */}
        <div class="max-w-[1024px] mx-auto px-4 md:px-8">
          
          <div class="max-w-[600px]">
            <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black">
              We also offer unique services for your events
            </h1>
          </div>

          {/* Cards */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div class="mt-16 bg-[var(--gray-color)] w-full py-12">
          <div class="max-w-[1024px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
            
            {/* Images */}
            <div class="flex gap-4">
              <img
                src="service-content-1.png"
                class="w-[200px] md:w-[350px] lg:w-[431px] h-auto object-cover"
              />
              <div class="flex flex-col gap-4 mt-6 md:mt-12">
                <img
                  src="service-content-2.png"
                  class="w-[150px] md:w-[250px] lg:w-[290px] h-auto"
                />
                <img
                  src="service-content-3.png"
                  class="w-[150px] md:w-[250px] lg:w-[240px] h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div class="max-w-[500px]">
              <h1 class="text-2xl md:text-5xl font-[--secondary-font] text-black">
                Fastest Food Delivery in City
              </h1>

              <p class="text-gray-600 mt-4">
                Our visual designer lets you quickly drag and drop your way
                to custom apps for both desktop and mobile.
              </p>

              {/* Features */}
              <div class="flex flex-col gap-4 mt-6">
                
                <div class="flex items-center gap-3">
                  <span class="bg-[#AD343E] rounded-full p-2">
                    <img src="delivery-icon1.png" class="w-[12px] h-[12px]" />
                  </span>
                  <span class="text-sm text-gray-600">
                    Delivery within 30 minutes
                  </span>
                </div>

                <div class="flex items-center gap-3">
                  <span class="bg-[#AD343E] rounded-full p-2">
                    <img src="delivery-icon2.png" class="w-[12px] h-[12px]" />
                  </span>
                  <span class="text-sm text-gray-600">
                    Best Offers & Prices
                  </span>
                </div>

                <div class="flex items-center gap-3">
                  <span class="bg-[#AD343E] rounded-full p-2">
                    <img src="delivery-icon3.png" class="w-[12px] h-[12px]" />
                  </span>
                  <span class="text-sm text-gray-600">
                    Online Services Available
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    );
  },
});