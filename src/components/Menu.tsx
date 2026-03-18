import { defineComponent } from "vue";
import MenuCard from "./MenuCard";

export default defineComponent({
  name: "Menu",
  setup() {
    const menuItems = [
      {
        title: "Breakfast",
        description: "Start your day with a healthy breakfast.",
        icon: "menu1.png",
      },
      {
        title: "Main Dishes",
        description: "Fuel your afternoon with a delicious lunch.",
        icon: "menu2.png",
      },
      {
        title: "Drinks",
        description: "End your day with a refreshing drink.",
        icon: "menu3.png",
      },
      {
        title: "Desserts",
        description: "End your day with a satisfying dinner.",
        icon: "menu4.png",
      },
    ];

    return () => (
      <section class="py-16">
        
        {/* Heading */}
        <div class="max-w-[1024px] mx-auto px-4 text-center">
          <h1 class="text-3xl md:text-6xl font-[--secondary-font] mb-4 text-black">
            Browse Our Menu
          </h1>
        </div>

        {/* Cards */}
        <div class="max-w-[1024px] mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <MenuCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

      </section>
    );
  },
});