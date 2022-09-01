import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { FreeMode, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function SimilarItem({ item, listItem }) {
  return (
    <>
      <div
        className="h1 text-center mt-5"
        style={{ fontWeight: "550", color: "#353f40" }}
      >
        Các sản phẩm liên quan
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {listItem
            .filter((i) => i.typeId === item.typeId)
            .map((e) => (
              <SwiperSlide key={e.id}>
                <div className="item px-1">
                  <Link to={`/products-${e.id}`}>
                    <img src={e.imgURL} alt="shirt img" className="w-100" />
                  </Link>
                  <h4 className="text-center mt-3">{e.name}</h4>
                  <p className="text-center">Giá: {e.price} đ</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
