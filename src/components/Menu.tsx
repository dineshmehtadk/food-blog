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
        icon: "menu3.png",
      },
    ];

    return () => (
      <section class="mb-20">
        <div class="inset-0 flex flex-col items-center justify-center text-center px-40 mt-20">
          <h1 class="text-6xl font-[--secondary-font] mb-4 text-black">
            Browse Our Menu
          </h1>
        </div>
        <div class="flex gap-8 justify-center mt-8">

        {menuItems.map((item) => (
          <MenuCard
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
