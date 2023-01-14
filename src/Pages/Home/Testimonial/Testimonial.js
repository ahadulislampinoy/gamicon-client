import React from "react";

const Testimonial = () => {
  return (
    <div class="bg-white py-6 lg:py-12">
      <div class="max-w-screen-xl px-4 mx-auto">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold mb-8 md:mb-12 capitalize">
          What others say about us
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x">
          <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
            <div class="text-gray-600 text-center">
              “Convenient and reliable gaming console reselling platform. Highly
              recommend.”
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
              <div class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                  loading="lazy"
                  alt="avatar"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-green-600 text-sm md:text-base font-bold text-center sm:text-left">
                  John McCulling
                </div>
                <p class="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                  CEO / Datadrift
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
            <div class="text-gray-600 text-center">
              “Skeptical at first, but exceeded expectations. Definitely worth
              checking out!”
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
              <div class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                  loading="lazy"
                  alt="avatar"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-green-600 text-sm md:text-base font-bold text-center sm:text-left">
                  Kate Berg
                </div>
                <p class="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                  CFO / Dashdash
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
            <div class="text-gray-600 text-center">
              “Great platform for console sales, easy and efficient. Recommend
              it.”
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
              <div class="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                  loading="lazy"
                  alt="avatar"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-green-600 text-sm md:text-base font-bold text-center sm:text-left">
                  Greg Jackson
                </div>
                <p class="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                  CTO / Uptime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
