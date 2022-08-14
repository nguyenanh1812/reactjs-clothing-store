import React, { useEffect, useState } from "react";
import "./newShirts.css";
import { newShirts } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

export default function Slide() {
  // const [listShirt, setList] = useState(
  //   newShirts.filter((shirt) => shirt.forMan)
  // );
  const [man, setForMan] = useState(true);

  const genderChange = () => {
    setForMan(!man);
  };

  // useEffect(() => {
  //   if (man) {
  //     setList(newShirts.filter((shirt) => shirt.forMan));
  //   } else {
  //     setList(newShirts.filter((shirt) => !shirt.forMan));
  //   }
  // }, [man]);

  return (
    <>
      <div className="new-clothes">
        <div className="text-center mb-2">
          <div className="new-clothes__header"> WHAT'S NEW</div>
          <div className="new-clothes__link">
            <span className="clothes__link--hover">
              {!man ? (
                <div className="new-clothes__link--item" onClick={genderChange}>
                  For him
                </div>
              ) : (
                <div className="new-clothes__link--item">
                  For him<span className="active-link-new"></span>
                </div>
              )}
            </span>
            <span className="clothes__link--hover">
              {man ? (
                <div className="new-clothes__link--item" onClick={genderChange}>
                  For her
                </div>
              ) : (
                <div className="new-clothes__link--item">
                  For her <span className="active-link-new"></span>
                </div>
              )}
            </span>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {newShirts.map(
            (shirt) =>
              shirt.forMan === man && (
                <SwiperSlide>
                  <div key={shirt.id} className="item px-1">
                    <img
                      style={{ height: "550px" }}
                      src={shirt.imgURL}
                      alt="shirt img"
                    />
                    <h4 className="text-center mt-3">{shirt.name}</h4>
                    <p className="text-center">Giá: {shirt.price} đ</p>
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>

        {/* <div className="slider_nav">
          <i className="fas fa-chevron-circle-right am-next h1"></i>
          <i className="fas fa-chevron-circle-left am-prev h1"></i>
        </div> */}
      </div>
    </>
  );
}
