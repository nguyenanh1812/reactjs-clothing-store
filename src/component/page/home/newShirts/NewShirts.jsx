import React, { useState } from "react";
import "./newShirts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Slide({newShirts}) {
  const [man, setForMan] = useState(true);

  const genderChange = () => {
    setForMan(!man);
  };

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
          // navigation={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            586: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {newShirts
            .filter((newShirt) => newShirt.new)
            .map(
              (shirt) =>
                shirt.forMan === man && (
                  <SwiperSlide key={shirt.id}>
                    <div className="item px-1">
                      <Link to={`/products-${shirt.id}`}>
                        <img src={shirt.imgURL} alt="shirt img"  loading="lazy" />
                      </Link>
                      <h4 className="text-center mt-3">{shirt.name}</h4>
                      <p className="text-center">Gi??: {shirt.price} ??</p>
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
