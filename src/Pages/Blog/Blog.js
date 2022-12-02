import React from "react";

const Blog = () => {
  return (
    <div>
      <section className=" text-gray-800 mb-16 lg:mb-24 mt-8 lg:mt-16">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-4xl font-bold sm:text-5xl mb-10 text-center">
            Blog
          </h2>

          <div className="space-y-4">
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                What are the different ways to manage a state in a React
                application?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                There are four main types of state that we need to properly
                manage in our React apps: 1.Local state , 2.Global state,
                3.Server state, 4.Server state.
              </p>
            </details>
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                How does prototypical inheritance work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                What is a unit test? Why should we write unit tests?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important.Unit testing is an important step in the development
                process, because if done correctly, it can help detect early
                flaws in code which may be more difficult to find in later
                testing stages.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                React vs. Angular vs. Vue?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                React can be used as a UI library to render elements, without
                enforcing a specific project structure, and that's why it's not
                strictly a framework. <br />
                The Vue.js core library focuses on the View layer only. It's
                called a progressive framework because you can extend its
                functionality with official and third-party packages, such as
                Vue Router or Vuex, to turn it into an actual framework. <br />
                AngularJS, the original framework, is an MVC
                (Model-View-Controller) framework. But in Angular 2, there's no
                strict association with MV*-patterns as it is also
                component-based.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
