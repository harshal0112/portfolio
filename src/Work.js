import React from "react";
import { useNav } from "./hooks/useNav";
import data from "./Projects.json";

function Work(props) {
  const workRef = useNav("work");
  return (
    <div>
      <section
        ref={workRef}
        className={`w-full min-h-screen flex items-center justify-center snap-center pb-16 sm:pt-16`}
        id="work"
      >
        <div className="container overflow-hidden">
          <div className="mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-5xl font-bold tracking-tight w-full text-center mb-2">
              Projects
            </h1>
            <p className="text-base opacity-60 w-full text-center">
              My recent work
            </p>

            <div className="mt-10 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.projects.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="min-h-44 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-44 flex items-center">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-auto object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm opacity-70">
                        <a
                          href={product.href}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center mt-10">
              <button className="hover:bg-gray-200 p-2 rounded-lg px-4">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
