import { defineComponent } from "vue";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default defineComponent({
  name: "ContactPage",
  setup() {
    return () => (
      <>
        <Header />

        <section>
          <div class="max-w-[1296px] mx-auto py-16 px-4 sm:px-6 relative mb-[95px]">

            {/* Heading */}
            <div class="text-center mb-16">
              <h1 class="text-3xl sm:text-4xl md:text-6xl font-[--secondary-font] text-black mb-4">
                Contact Us
              </h1>
              <p class="max-w-[600px] mx-auto text-gray-600">
                We consider all the drivers of change gives you the components
                you need to create something meaningful.
              </p>
            </div>

            {/* Form Section */}
            <div class="relative flex justify-center">

              {/* Map Background */}
              <div class="absolute top-[120px] left-0 w-full h-[600px] bg-gray-200 rounded-xl z-[-111]"></div>

              {/* Form */}
              <div class="relative z-50 bg-white border border-gray-300 rounded-xl w-full max-w-[812px] p-6 sm:p-10 shadow-lg">

                {/* Row 1 */}
                <div class="flex flex-col sm:flex-row gap-4 mb-6">
                  <div class="flex flex-col w-full">
                    <label class="text-sm mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                    />
                  </div>

                  <div class="flex flex-col w-full">
                    <label class="text-sm mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      class="border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div class="mb-6">
                  <label class="text-sm mb-1 font-medium block">Subject</label>
                  <input
                    placeholder="Write a subject"
                    class="w-full border border-gray-300 rounded-full px-3 h-10 focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                  />
                </div>

                {/* Message */}
                <div class="mb-8">
                  <label class="text-sm mb-1 font-medium block">Message</label>
                  <textarea
                    placeholder="Write your message"
                    class="w-full min-h-[140px] border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                  ></textarea>
                </div>

                {/* Button */}
                <div class="flex justify-center">
                  <button class="px-8 py-3 bg-[var(--brown-color)] text-white rounded-full hover:bg-black transition duration-300 w-full sm:w-auto">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-center sm:text-left">

              <div>
                <h3 class="font-semibold mb-2">Call Us</h3>
                <p class="text-[var(--brown-color)] font-bold">
                  +1-234-567-8900
                </p>
              </div>

              <div>
                <h3 class="font-semibold mb-2">Hours</h3>
                <ul class="space-y-1 text-sm text-gray-600">
                  <li>Mon-Fri: 11am - 8pm</li>
                  <li>Sat-Sun: 9am - 10pm</li>
                </ul>
              </div>

              <div>
                <h3 class="font-semibold mb-2">Our Location</h3>
                <ul class="space-y-1 text-sm text-gray-600">
                  <li>123 Bridge Street</li>
                  <li>Nowhere Land, LA 12345</li>
                  <li>United States</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  },
});