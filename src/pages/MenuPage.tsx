import { defineComponent } from "vue";
import Header from "../components/Header/Header";

import Footer from "../components/Footer";
import MenuItemCard from "@/components/MenuItemCard";

export default defineComponent({
  name: "Home",
  setup() {
    const menuList = [
      {
        image: "menu-item-1.png",
        title: "Fried Eggs",
        price: 9.32,
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        image: "menu-item-2.png",
        title: "Hawaiian Pizza",
        price: 32.32,
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        image: "menu-item-3.png",
        title: "Martinez Cocktail",
        price: 7.25,
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        image: "menu-item-4.png",
        title: "Butterscotch Cake",
        price: 20.99,
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        image: "menu-item-5.png",
        title: "Mint Lemonade",
        price: 5.89,
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        image: "menu-item-6.png",
        title: "Chocolate Icecream",
        price: 18.5,
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        image: "menu-item-7.png",
        title: "Cheese Burger",
        price: 12.55,
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
      {
        image: "menu-item-8.png",
        title: "Classic Waffles",
        price: 12.99,
        description:
          "Made with eggs, lettuce, salt, oil and other ingredients.",
      },
    ];

    const deleveryPatners = [
      {
        logos: [
          "delevery-patner-1.png",
          "delevery-patner-2.png",
          "delevery-patner-3.png",
        ],
        width: "w-[235px]",
      },
      {
        logos: [
          "delevery-patner-4.png",
          "delevery-patner-5.png",
          "delevery-patner-6.png",
        ],
        width: "w-[251px]", // wider row
      },
      {
        logos: [
          "delevery-patner-7.png",
          "delevery-patner-8.png",
          "delevery-patner-9.png",
        ],
        width: "w-[235px]",
      },
    ];
    return () => (
      <>
        <Header />
        <section>
          <div class="max-w-[1296px] mx-auto py-16 px-12">
            <div class="text-center flex flex-col items-center px-4">
              <h1 class="text-3xl sm:text-4xl md:text-6xl font-[--secondary-font] text-black mb-4">
                Our Menu
              </h1>

              <p class="max-w-[600px] text-gray-600 text-sm sm:text-base">
                We consider all the drivers of change gives you the components
                you need to create something truly meaningful.
              </p>
            </div>
            <div class="flex justify-start sm:justify-center gap-3 py-6 overflow-x-auto no-scrollbar px-4">
              {["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"].map(
                (item, index) => (
                  <button
                    key={index}
                    class={`
        whitespace-nowrap px-6 py-2.5 rounded-full border transition
        ${
          index === 0
            ? "bg-[var(--brown-color)] text-white border-transparent"
            : "border-[var(--gray-color)] hover:bg-[var(--brown-color)] hover:text-white"
        }
      `}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center ">
              {menuList.map((item) => (
                <MenuItemCard
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>
          </div>
       <div class="bg-[var(--light-gray-color)] py-12 sm:py-16">

  <div class="max-w-[1296px] mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-10 px-4 sm:px-6 lg:px-12">

    {/* Left Content */}
    <div class="text-center lg:text-left">
      <h1 class="text-3xl sm:text-4xl md:text-6xl font-[--secondary-font] text-black mb-4">
        Our Menu
      </h1>

      <p class="text-gray-600 max-w-[500px] mx-auto lg:mx-0 text-sm sm:text-base">
        We consider all the drivers of change that give you the components
        you need to create a truly impactful experience.
      </p>
    </div>

    {/* Right Content (Logos) */}
    <div class="lg:col-span-2 flex flex-col items-center gap-4">

      {deleveryPatners.map((row, rowIndex) => (
        <div
          key={rowIndex}
          class="flex gap-3 sm:gap-4 justify-center flex-wrap"
        >
          {row.logos.map((logo, index) => (
            <div
              key={index}
              class={`
                ${row.width}
                h-[80px] sm:h-[90px]
                bg-white rounded-xl
                flex items-center justify-center
                shadow-md hover:shadow-lg
                transition duration-300
              `}
            >
              <img
                src={logo}
                class="h-[22px] sm:h-[28px] object-contain"
              />
            </div>
          ))}
        </div>
      ))}

    </div>

  </div>
</div>
        </section>

        <Footer />
      </>
    );
  },
});
