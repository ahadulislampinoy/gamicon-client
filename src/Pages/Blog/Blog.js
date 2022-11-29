import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4">
              Most Asked Interview Questions
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Read And Prepare Yourself For Upcoming Interviews👨‍💻
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-gray-800 sm:text-lg md:text-xl font-semibold">
                  What are the different ways to manage a state in a React
                  application?
                </h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500 leading-7">
                In React apps, there are several ways to manage a state. The
                most used ways are Local state, Global state, Server state, and
                URL state. Local state is mostly managed by useState hook. The
                global state we use when we want to get and update data from
                anywhere in our app the most common global state example is
                COntext API. Data comes from an external server that must be
                integrated with our UI state, React Query makes managing server
                state much easier.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-gray-800 sm:text-lg md:text-xl font-semibold">
                  How does prototypical inheritance work?
                </h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500 leading-7">
                In JavaScript, objects have a special private property that
                holds a link to another object called its Prototype. It's a
                feature used to add methods and properties to objects. It is a
                method by which an object can inherit the properties and methods
                of another object. Traditionally, in order to get and set the
                Prototype of an object, we use Object.getPrototypeOf and
                Object.setPrototypeOf. Nowadays, in modern language, it is being
                set using __proto__.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-gray-800 sm:text-lg md:text-xl font-semibold">
                  What is a unit test? Why should we write unit tests?
                </h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500 leading-7">
                Unit testing is testing individual components of a software
                program or application. The main purpose of unit testing is to
                ensure that each individual part is working well and as it’s
                supposed to work. The entire system will only be able to work
                well if the individual parts are working well.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
                <h3 className="text-gray-800 sm:text-lg md:text-xl font-semibold">
                  React vs. Angular vs. Vue?
                </h3>

                <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500 leading-7">
                These three frameworks are used in the Front end applications.
                React is a UI library, Angular is a fully-fledged framework and
                Vue.js is a progressive framework. Angular is the most mature
                framework among React and Vue. If you have a large team and use
                TypeScript, Angular might be a good solution. React framework
                makes dynamic websites work seamlessly. Among these three Vue is
                the newest, If you’re looking for simplicity and flexibility,
                Vue is the right choice for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
