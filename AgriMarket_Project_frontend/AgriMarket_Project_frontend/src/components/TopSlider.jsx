import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const sliderImgStyle = {
    width: "100vw", // Set the desired width
    height: "700px", // Set the desired height
    objectFit: "cover",
    display: "block",
    margin: "0 auto"
  };

  return (
    <Slider {...settings}>
      <div className="wdt">
        <img
          style={sliderImgStyle}
          alt="pic1"
          src="/assets/1.jpg"
        />
      </div>
      <div className="wdt">
        <img
          style={sliderImgStyle}
          alt="pic2"
          src="/assets/2.jpg"
        />
      </div>
      <div className="wdt">
        <img
          style={sliderImgStyle}
          alt="pic3"
          src="/assets/3.jpg"
        />
      </div>
      <div className="wdt">
        <img
          style={sliderImgStyle}
          alt="pic4"
          src="/assets/4.jpg "
        />
      </div>
    </Slider>
  );
}

export default TopSlider;