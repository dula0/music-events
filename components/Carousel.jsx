import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Slides } from "@/styles/Carousel.style";

export default function Carousel(props) {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1200,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current?.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  return (
    <div ref={sliderRef} className="keen-slider">
      <Slides className="keen-slider__slide">
        <Image
          src="/images/carousel/carti.webp"
          width={620}
          height={300}
          className="round"
        />
      </Slides>
      <Slides className="keen-slider__slide">
        <Image
          src="/images/carousel/drake.webp"
          width={620}
          height={300}
          className="round"
        />
      </Slides>
      <Slides className="keen-slider__slide">
        <Image
          src="/images/carousel/french.jpg"
          width={600}
          height={300}
          className="round"
        />
      </Slides>
      <Slides className="keen-slider__slide">
        <Image
          src="/images/carousel/gz.webp"
          width={620}
          height={300}
          className="round"
        />
      </Slides>
      <Slides className="keen-slider__slide">
        <Image
          src="/images/carousel/meek.jpg"
          width={620}
          height={300}
          className="round"
        />
      </Slides>
    </div>
  );
}
