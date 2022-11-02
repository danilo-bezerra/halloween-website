import Slider from "infinite-react-carousel";
import { useEffect, useState } from "react";
import { Container, SlidesGrid, SquareImage } from "./styles";

export function PhotoGallery() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isOneColumnGallery = windowDimensions.width < 600;
  const slidesToShow = isOneColumnGallery ? 1 : 3;

  console.log(windowDimensions.width);

  return (
    <Container>
      <Slider autoplay arrows={false} slidesToShow={slidesToShow}>
        <SquareImage src="https://images.pexels.com/photos/10670326/pexels-photo-10670326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <SquareImage src="https://images.pexels.com/photos/8281863/pexels-photo-8281863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <SquareImage src="https://images.pexels.com/photos/12299686/pexels-photo-12299686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <SquareImage src="https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <SquareImage src="https://images.pexels.com/photos/13777905/pexels-photo-13777905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <SquareImage src="https://images.pexels.com/photos/13619821/pexels-photo-13619821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Slider>
      {isOneColumnGallery ? (
        <>
          <Slider autoplay arrows={false}>
            <SquareImage
              className="h"
              src="https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <SquareImage
              className="h"
              src="https://images.pexels.com/photos/13777905/pexels-photo-13777905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <SquareImage
              className="h"
              src="https://images.pexels.com/photos/13619821/pexels-photo-13619821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Slider>
          <Slider autoplay arrows={false}>
            <SquareImage src="https://images.pexels.com/photos/10670326/pexels-photo-10670326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <SquareImage src="https://images.pexels.com/photos/8281863/pexels-photo-8281863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <SquareImage src="https://images.pexels.com/photos/12299686/pexels-photo-12299686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </Slider>
        </>
      ) : (
        <>
          <SlidesGrid>
            <Slider autoplay arrows={false}>
              <SquareImage
                className="h"
                src="https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <SquareImage
                className="h"
                src="https://images.pexels.com/photos/13777905/pexels-photo-13777905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <SquareImage
                className="h"
                src="https://images.pexels.com/photos/13619821/pexels-photo-13619821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </Slider>
            <Slider autoplay arrows={false}>
              <SquareImage src="https://images.pexels.com/photos/10670326/pexels-photo-10670326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <SquareImage src="https://images.pexels.com/photos/8281863/pexels-photo-8281863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <SquareImage src="https://images.pexels.com/photos/12299686/pexels-photo-12299686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </Slider>
          </SlidesGrid>
        </>
      )}
    </Container>
  );
}
