import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Homepage() {
  return (
    <>
      <div className=" py-4 bg-black" id="ehhe">

        <main className="container py-4">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mb-4"
          >
            <SwiperSlide>
              <img
                className="img-fluid rounded w-100"
                src="https://hoyo.global/wp-content/uploads/2024/03/march-impression-apparel-official-merch-hsr-1788.webp"
                alt="Men's Category"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded w-100"
                src="https://hoyo.global/wp-content/uploads/2023/06/kazuha-impression-official-merch-genshin-1788.webp"
                alt="Women's Category"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-fluid rounded w-100"
                src="https://hoyo.global/wp-content/uploads/2023/06/yae-miko-impression-official-merch-genshin-1788.webp"
                alt="New Arrivals"
              />
            </SwiperSlide>
          </Swiper>
          <div className="row">
            <h1 className="text-center text-light display-6  pt-4">
              Choose from a category
            </h1>
            <p className="text-center text-light opacity-75">
              Some really popular and interesting items that most Teyvat
              travelers would love!
            </p>
            <div className="col-md-6 pt-4">
              <img
                className="img-fluid rounded"
                src="../src/assets/men-category.png"
                alt=""
              />
            </div>
            <div className="col-md-6 pt-4">
              <img
                className="img-fluid rounded"
                src="../src/assets/women=category.png"
                alt=""
              />
            </div>
          </div>
          <div className="row ">
            <h1 className="text-center text-light display-6 mt-4  pt-4">
              We offer everything you need
            </h1>
            <p className="text-center text-light opacity-75">
              From pillows, accessories to cosplay!
            </p>
            <div className="col-md-6  mt-4 pt-4">
              <img
                className="img-fluid rounded"
                src="https://genshinfans.com/cdn/shop/files/004_785x.png?v=1692087003"
                alt=""
              />
            </div>
            <div className="col-md-6  mt-4 pt-4">
              <img
                className="img-fluid rounded"
                src="https://genshinfans.com/cdn/shop/files/003_785x.png?v=1692086990"
                alt=""
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4"></div>
            <div className="col-md-6 mt-3 pt-2">
              <img
                className="img-fluid rounded"
                src="https://genshinfans.com/cdn/shop/files/002_785x.png?v=1692086971"
                alt=""
              />
            </div>
            <div className="col-md-2"></div>
          </div>
        </main>
      </div>
    </>
  );
}