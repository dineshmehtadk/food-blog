import { defineComponent } from "vue";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import BlogItemCard from "@/components/BlogItemCard";

export default defineComponent({
  name: "BlogPage",
  setup() {


      const blogs = [
      {
        date: "January 3, 2023",
        description: "How to prepare the perfect french fries in an air fryer",
        image: "blog-item-1.png",
      },
      {
        date: "July 3, 2025",
        description: "How to prepare delicious chicken tenders",
        image: "blog-item-2.png",
      },
      {
        date: "September 3, 2025",
        description: "7 delicious cheesecake recipes you can prepare",
        image: "blog-item-3.png",
      },
      {
        date: "February 3, 2024",
        description: "5 great pizza restaurants you should visit this city",
        image: "blog-item-4.png",
      },
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

      {
        date: "January 3, 2023",
        description: "How to prepare the perfect french fries in an air fryer",
        image: "blog-item-9.png",
      },
      {
        date: "July 3, 2025",
        description: "How to prepare delicious chicken tenders",
        image: "blog-item-10.png",
      },
      {
        date: "September 3, 2025",
        description: "7 delicious cheesecake recipes you can prepare",
        image: "blog-item-11.png",
      },
      {
        date: "February 3, 2024",
        description: "5 great pizza restaurants you should visit this city",
        image: "blog-item-12.png",
      },
    ];
    return () => (
      <>
        <Header />

        <section>
          <div class="max-w-[1296] mx-auto py-16 px-22">
            {/* Heading */}
            <div class="text-center mb-20">
              <h1 class="text-3xl md:text-6xl font-[--secondary-font] text-black mb-6">
                Our Blog & Articles{" "}
              </h1>
              <p class="max-w-[600px] mx-auto">
                We consider all the drivers of change gives you the components you need to change to create a truly happens.
              </p>
            </div>

                {/* Right Small Blogs */}
                        <div class=" grid grid-cols-1 sm:grid-cols-4 gap-6">
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
        </section>
        <Footer />
      </>
    );
  },
});
