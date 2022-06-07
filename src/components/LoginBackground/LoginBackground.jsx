import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { CoinSliceFun } from "./../../redux/CoinSlice";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// style
import "./LoginBackground.css";
function LoginBackground() {
  const dispatch = useDispatch();
  const DataRank = useSelector((state) => state.Coin.Data);

  useEffect(() => {
    dispatch(CoinSliceFun());
  }, []);
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      speed={1000}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
      className="LoginMySwiper position-absolute w-100 h-100"
    >
      {/* {DataRank.length && (
        <>
          <SwiperSlide className="LoginSlideItem w-100">
            <img src={DataRank[3].image} />
          </SwiperSlide>
          <SwiperSlide className="LoginSlideItem w-100">
            <img src={DataRank[2].image} />
          </SwiperSlide>
          <SwiperSlide className="LoginSlideItem w-100">
            <img src={DataRank[1].image} />
          </SwiperSlide>
          <SwiperSlide className="LoginSlideItem w-100">
            <img src={DataRank[0].image} />
          </SwiperSlide>
        </>
      )} */}
      {DataRank.length &&
        DataRank.slice(0, 10).map((item, index) => (
          <SwiperSlide key={index} className="LoginSlideItem">
            <img
              src={item.image}
              alt="..."
              className="LoginSlideItemImage position-absolute h-auto"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default LoginBackground;
