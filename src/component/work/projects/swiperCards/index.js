import React from "react";

import ProjectCard from "../project";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

function SwiperCardSlide({ projects }) {
  return (
    <Swiper
      spaceBetween={15}
      loop={true}
      className="mySwiper w-full"
      pagination={{
        clickable: true,
      }}
    >
      {projects.map((project) => {
        return (
          <SwiperSlide>
            <ProjectCard project={project} key={project.title} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperCardSlide;
