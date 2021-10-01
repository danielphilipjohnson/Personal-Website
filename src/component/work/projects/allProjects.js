import React from "react";
import SwiperCardSlide from "../projects/swiperCards";

function allProjects({ types, projects }) {
  const getProjectsByTypes = (allProjects, type) => {
    return allProjects.filter((project) => {
      if (project.type === type) return project;
    });
  };
  return (
    <div>
      {types.map((type) => {
        return (
          <>
            <div className="flex w-full justify-between items-center border-grey border-b mb-4 pb-2">
              <h3 className="text-lg font-bold capitalize">{type} ✨ </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <SwiperCardSlide projects={getProjectsByTypes(projects, type)} />
          </>
        );
      })}
    </div>
  );
}

export default allProjects;
