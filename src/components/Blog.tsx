import { defineComponent } from "vue";
import BlogCard from "./BlogCard";

export default defineComponent({
  name: "Blog",
  setup() {
    const blogs = [
      {
        date: "January 3, 2023",
        description: "How to prepare the perfect french fries in an air fryer",
        image: "blog-1.png",
      },
      {
        date: "July 3, 2025",
        description: "How to prepare delicious chicken tenders",
        image: "blog-2.png",
      },
      {
        date: "September 3, 2025",
        description: "7 delicious cheesecake recipes you can prepare",
        image: "blog-3.png",
      },
      {
        date: "February 3, 2024",
        description: "5 great pizza restaurants you should visit this city",
        image: "blog-4.png",
      },
    ];

    return () => (
      <section class="py-16 bg-[var(--light-gray-color)]">
        
        <div class="max-w-[1024px] mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div class="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black text-center md:text-left">
              Our Blog & Articles
            </h1>

            <button class="px-6 py-3 bg-[var(--brown-color)] text-white rounded-full hover:bg-black transition whitespace-nowrap">
              Read All Articles
            </button>
          </div>

          {/* Content */}
          <div class="flex flex-col lg:flex-row gap-8">
            
            {/* Left Big Blog */}
            <div class="lg:w-1/2 bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src="blog-main.png"
                alt="blog main"
                class="w-full h-[250px] md:h-[350px] object-cover"
              />

              <div class="p-6 md:p-8 text-left">
                <h2 class="text-sm text-gray-500 mb-2">
                  January 3, 2023
                </h2>

                <p class="text-lg font-medium mb-3">
                  The secret tips & tricks to prepare a perfect burger & pizza
                </p>

                <p class="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Massa
                  gravida nisi cras enim quis nibh varius amet.
                </p>
              </div>
            </div>

            {/* Right Small Blogs */}
            <div class="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <BlogCard
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
    );
  },
});