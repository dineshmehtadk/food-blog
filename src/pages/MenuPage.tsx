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
        width: "w-[240px]",
      },
      {
        logos: [
          "delevery-patner-4.png",
          "delevery-patner-5.png",
          "delevery-patner-6.png",
        ],
        width: "w-[280px]", // wider row
      },
      {
        logos: [
          "delevery-patner-7.png",
          "delevery-patner-8.png",
          "delevery-patner-9.png",
        ],
        width: "w-[240px]",
      },
    ];
    return () => (
      <>
        <Header />
        <section>
          <div class="max-w-[1296px] mx-auto py-16 px-12">
            <div class="text-center align-item-center">
              <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black mb-6 ">
                Our Menu{" "}
              </h1>
              <p class="px-93">
                We consider all the drivers of change gives you the components
                you need to change to create a truly happens.
              </p>{" "}
            </div>
            <div class="flex justify-center text-center align-item-center gap-2 py-12">
              <button class="px-8 py-3 bg-[var(--brown-color)] text-white rounded-full hover:bg-black transition whitespace-nowrap">
                All
              </button>

              <button class="w-fit px-6 py-3 border border-[var(--gray-color)] rounded-full hover:bg-[var(--brown-color)] hover:text-white transition">
                Breakfast
              </button>

              <button class="w-fit px-6 py-3 border border-[var(--gray-color)] rounded-full hover:bg-[var(--brown-color)] hover:text-white transition">
                Main Dishes
              </button>

              <button class="w-fit px-6 py-3 border border-[var(--gray-color)] rounded-full hover:bg-[var(--brown-color)] hover:text-white transition">
                Drinks
              </button>

              <button class="w-fit px-6 py-3 border border-[var(--gray-color)] rounded-full hover:bg-[var(--brown-color)] hover:text-white transition">
                Desserts
              </button>
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
          <div class="bg-[var(--light-gray-color)]  py-16">
            <div class="max-w-[1296px]  mx-auto  grid grid-cols-3 lg:flex-row items-center gap-12 px-12">
              {/* Left Content */}
              <div class="col-span-1 text-center lg:text-left px-12">
                <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black mb-6">
                  Our Menu
                </h1>

                <p class="text-gray-600 max-w-md mx-auto lg:mx-0">
                  We consider all the drivers of change that give you the
                  components you need to create a truly impactful experience.
                </p>
              </div>
              <div class="col-span-2 flex flex-col items-center gap-4">
                {deleveryPatners.map((row, rowIndex) => (
                  <div key={rowIndex} class="flex gap-4 justify-center">
                    {row.logos.map((logo, index) => (
                      <div
                        key={index}
                        class={`${row.width} h-[90px] bg-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition duration-300`}
                      >
                        <img src={logo} class="h-[28px] object-contain" />
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
