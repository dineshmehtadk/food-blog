import { defineComponent } from "vue";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import BlogItemCard from "@/components/BlogItemCard";

export default defineComponent({
  name: "BlogDetailsPage",
  setup() {
    const blogs = [
      {
        date: "January 3, 2023",
        description: "How to prepare the perfect french fries in an air fryer",
        image: "blog-item-5.png",
      },
      {
        date: "July 3, 2025",
        description: "How to prepare delicious chicken tenders",
        image: "blog-item-6.png",
      },
      {
        date: "September 3, 2025",
        description: "7 delicious cheesecake recipes you can prepare",
        image: "blog-item-7.png",
      },
      {
        date: "February 3, 2024",
        description: "5 great pizza restaurants you should visit this city",
        image: "blog-item-8.png",
      },
    ];

    return () => (
      <>
        <Header />

        <section>
          <div class="max-w-[1296px] mx-auto py-16 px-6">
            {/* Heading */}
            <div class="text-center mb-16">
              <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black  p-22">
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers{" "}
              </h1>

              <img
                src="blog-item-3.png"
                class="w-full max-w-[1070px] mx-auto rounded-lg"
                alt="blog main image"
              />
            </div>

            {/* Content */}
            <div class="mb-16 max-w-3xl mx-auto text-gray-700 space-y-4">
              <h2 class="text-2xl font-semibold">
                What do you need to prepare a home-made burger?
              </h2>

              <p>
                Creating the perfect burger and pizza is an art, combining
                ingredients, techniques, and passion to craft dishes that truly
                delight the palate.
              </p>

              <ul class="list-disc pl-6 space-y-2">
                <li>
                  Quality Beef: Use fresh beef with 20% fat for best flavor.
                </li>
                <li>Seasoning: Keep it simple with salt and pepper.</li>
                <li>Don’t Overwork the Meat: Keep patties soft.</li>
                <li>Cooking: Use high heat for a crispy crust.</li>
                <li>Resting: Let burgers rest before serving.</li>
              </ul>
            </div>

            <div class="mb-16 max-w-3xl mx-auto text-gray-700 space-y-4">
              <h2 class="text-2xl font-semibold">
                What are the right ingredients to make it delicious?{" "}
              </h2>

              <p>
                Creating the perfect burger and pizza is an art, combining
                ingredients, techniques, and passion to craft dishes that truly
                delight the palate. Today, we'll unveil some closely guarded
                secrets and insider tips for mastering these beloved staples of
                the culinary world.
              </p>

              <ul class="list-disc pl-6 space-y-2">
                <li>
                  Quality Beef: Use fresh beef with 20% fat for best flavor.
                </li>
                <li>Seasoning: Keep it simple with salt and pepper.</li>
                <li>Don’t Overwork the Meat: Keep patties soft.</li>
                <li>Cooking: Use high heat for a crispy crust.</li>
                <li>Resting: Let burgers rest before serving.</li>
              </ul>
            </div>

            {/* Read More Section */}
            <div class="bg-[var(--light-gray-color)] py-16 px-6 rounded-xl">
              <div class="text-center mb-12">
                <h1 class="text-3xl md:text-5xl font-[var(--secondary-font)] text-black mb-4">
                  Read More Articles
                </h1>

                <p class="text-gray-600 max-w-xl mx-auto">
                  We consider all the drivers of change gives you the components
                  you need to create a truly impactful experience.
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog) => (
                  <BlogItemCard
                    key={blog.image}
                    date={blog.date}
                    description={blog.description}
                    image={blog.image}
                  />
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
