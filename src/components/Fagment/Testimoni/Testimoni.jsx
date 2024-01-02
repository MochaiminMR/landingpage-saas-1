import React, { useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card } from "react-bootstrap";

const Testimoni = () => {

  const [slidesPerView, setSlidesPerView] = useState(3);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 700) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(3);
    }
  };

  handleResize(); // Set initial value
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


  const customPrevButton = (
    <button className="custom-swiper-button-prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M14.6668 6.66663L5.3335 16L14.6668 25.3333M5.3335 16H26.6668"
          stroke="#5468E7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );

  const customNextButton = (
    <button className="custom-swiper-button-next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M5.3335 16H26.6668M17.3335 6.66663L26.6668 16L17.3335 25.3333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div className="testimoni overflow-hidden ">
      <div className="pb-5 " style={{ overflow: "hidden"}}>
        <div className="flex-lg-row text-center pb-lg-5 pb-3">
          <h1 className="font-header ">What people say about Team</h1>
        </div>
        <div className="testimoni-text overflow-hidden ">
          <Swiper
            className="overflow-hidden  p-lg-5"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Virtual, Navigation, Pagination]}
            slidesPerView={slidesPerView}
            spaceBetween={20}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            virtual>
            <SwiperSlide className="tes card-shadow">
              <TestimoniCard
                author="John Doe"
                position="Software Engineer"
                content="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
              />
            </SwiperSlide>
            <SwiperSlide className="tes card-shadow">
              <TestimoniCard
                author="Alfonso Davies"
                position="Software Engineer"
                content="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
              />
            </SwiperSlide>
            <SwiperSlide className="tes card-shadow">
              <TestimoniCard
                author="N*gg* Man"
                position="Software Engineer"
                content="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
              />
            </SwiperSlide>
            <SwiperSlide className="tes card-shadow">
              <TestimoniCard
                author="El Matador"
                position="Software Engineer"
                content="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
              />
            </SwiperSlide>
            <SwiperSlide className="tes card-shadow">
              <TestimoniCard
                author="Joni Hol"
                position="Software Engineer"
                content="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
              />
            </SwiperSlide>
            {/* Tambahkan Slides Lainnya di Sini */}
          </Swiper>
          <div className="custom-navigation">
            {customPrevButton}
            {customNextButton}
          </div>
        </div>
      </div>
    </div>
  );
};
const TestimoniCard = ({ author, position, content }) => {
  return (
    <div className="card" style={{ width: "18rem", border: "none" }}>
      <div className="card-body">
   
        <img src="testimoni/rating.svg" alt="rating-image" className="mb-4" />
        <p className="card-text long-text">{content}</p>
        <div className="people d-flex flex-row pt-5 gap-2 align-items-center">
          <img src="testimoni/people-1.png" alt="people-image" />
          <div className="d-flex flex-column">
            <h5 className="card-title">{author}</h5>
            <h6 className="card-subtitle mb-2 blue text-lg-xs">{position}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
