import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BsImageFill, BsSearch } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomNextArrow from "../common/arrow/CustomNextArrow";
import CustomPrevArrow from "../common/arrow/CustomPrevArrow";

export const Hero = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <section
        className="min-h-[58vh]"
        style={{
          background: `linear-gradient(90deg, rgba(0,143,161,0.8) 0%, rgba(0,188,212,0.6) 100%), url("/src/assets/images/hero.jpg")`,
        }}
      >
        <div className="md:max-w-[700px] mx-auto py-12 text-white text-center px-3">
          <h2 className="xl:text-4xl text-3xl max-w-[350px] md:max-w-[700px] mx-auto font-bold font-inter mb-4">
            All your photo collection in one place
          </h2>
          <h4 className="md:text-xl text-base mt-5 lg:mt-0">
            Explore your high-quality{" "}
            <BsImageFill className="inline-flex ms-2" /> photos, all in one
            place
          </h4>
          <div className="mt-8">
            <form>
              <div
                className="flex items-center rounded xl:h-[56px] h-[52px] ps-5 w-full outline-none text-dark bg-white"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px",
                }}
              >
                <input
                  type="text"
                  className="h-full focus:caret-moonstone w-full outline-none font-inter text-base font-medium text-dark/60"
                  placeholder="Search photos here ..."
                />
                <button
                  type="submit"
                  className="h-[48px] w-[48px] flex items-center justify-center text-[28px] mx-1 px-3 opacity-50 hover:opacity-90 default-transition"
                >
                  <BsSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="py-8 overflow-hidden">
          <div className="overflow-hidden">
            <Slider
              nextArrow={<CustomNextArrow />}
              prevArrow={<CustomPrevArrow />}
              {...settings}
            >
              <Card
                title="Portrait"
                image="./src/assets/images/category/portrait.jpg"
              />
              <Card
                title="Fashion"
                image="./src/assets/images/category/portrait.jpg"
              />
              <Card
                title="Newborn"
                image="./src/assets/images/category/newborn.jpg"
              />
              <Card
                title="Wedding"
                image="./src/assets/images/category/wedding.jpg"
              />
              <Card
                title="Nature"
                image="./src/assets/images/category/nature.jpg"
              />
              <Card
                title="Maternity"
                image="./src/assets/images/category/maternity.jpg"
              />
            </Slider>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-4 border-b-[1px] border-dark/10 pb-12">
          <p className="text-white opacity-90 text-base font-inter font-light">
            Create an account to upload photos.
          </p>
          <Button
            size="lg"
            className="bg-white rounded text-moonstone  tracking-[1px] border-white border-[1px]"
          >
            Sign up for free
          </Button>
        </div>
      </section>
    </>
  );
};

export const Card = ({ title, image }) => {
  return (
    <div className="px-2 group">
      <div className="card text-center relative">
        <div className="image w-60 h-80 overflow-hidden border-[3px] border-white rounded-lg group-hover:border-white default-transition">
          {image && (
            <img
              src={image}
              alt="title"
              className="object-cover w-full h-full default-transition hover:scale-125 hover:rotate-6"
            />
          )}
        </div>
        <h2
          className="mt-5 font-inter uppercase font-semibold tracking-[1px] absolute bottom-4 right-4 bg-white text-dark/70 px-3 rounded-[6px] text-xs py-[4px] flex items-center justify-center group-hover:text-moonstone default-transition"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any,
};
