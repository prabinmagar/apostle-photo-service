import { Button } from "@material-tailwind/react";
import { AiOutlineLike, AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { SellContentHeroCards } from "./SellContentHero";
import { TitleHeading } from "../common/design/Title";
import PropTypes from "prop-types";
import CustomNextArrow from "../common/arrow/CustomNextArrow";
import CustomPrevArrow from "../common/arrow/CustomPrevArrow";
import Slider from "react-slick";

export const Explore = () => {
  return (
    <>
      <section className="py-12">
        <div className="containers">
          <div className="section-title">
            <h2 className="text-3xl font-inter text-center font-bold">
              <span className="text-new-blue font-semibold leading-loose text-moonstone">
                View
              </span>{" "}
              your stored collection
            </h2>
            <p className="text-center text-base text-dark/80 opacity-70">
              The collection of your stock photos or images the reminds your
              beautiful moments.
            </p>
          </div>

          <div className="grid explore-grid-one grid-cols-4 grid-rows-3 xxl:gap-4 md:gap-2 gap-1  mt-12">
            <Card
              title="Newborn"
              gridClass="col-span-2 row-span-2"
              image="/src/assets/images/featured/new1.jpg"
            />
            <Card
              title="Wedding"
              gridClass=""
              image="/src/assets/images/featured/wed1.jpg"
            />
            <Card
              title="Dry Leaves"
              gridClass=""
              image="/src/assets/images/featured/nature1.jpg"
            />
            <Card
              title="Maternity"
              gridClass=""
              image="/src/assets/images/featured/mat1.jpg"
            />
            <Card
              title="Promise"
              gridClass=""
              image="/src/assets/images/featured/wed2.jpg"
            />
            <Card
              title="Landscape"
              gridClass=""
              image="/src/assets/images/featured/nature2.jpg"
            />
            <Card
              title="Ceremony"
              gridClass=""
              image="/src/assets/images/featured/mat2.jpg"
            />
            <Card
              title="Cuteness"
              gridClass=""
              image="/src/assets/images/featured/new2.jpg"
            />
            <Card
              title="Love & Care"
              gridClass=""
              image="/src/assets/images/featured/new4.jpg"
            />
          </div>
        </div>
      </section>
      <Explore1 />
      <ViewSlider />
      <Features />
      <Explore3 />
      <Explore5 />
      <Explore6 />
      <Explore4 />
      <Explore7 />
    </>
  );
};
export const Explore1 = () => {
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
    <section className="py-12 bg-moonstone/5">
      <div className="containers pb-6">
        <div className="section-title text-start">
          <h2 className="text-3xl font-inter font-bold">
            <span className="text-new-blue font-semibold leading-loose text-moonstone">
              Colourful
            </span>{" "}
            photo albums of your pick
          </h2>
          <p className="text-base text-dark/80 opacity-70">
            Get the glimpse of the precious moments under the same bundle.
          </p>
        </div>

        <div className="mt-8">
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            {...settings}
          >
            <CardSlanted
              title="Mountain Climbing"
              image="src/assets/images/featured/nature4.jpg"
              styles="rounded-xl"
              show={true}
            />
            <CardSlanted
              title="Holy Marriage"
              image="src/assets/images/featured/wed4.jpg"
              styles="rounded-xl"
              show={true}
            />
            <CardSlanted
              title="Baby Show Ceremony"
              image="src/assets/images/featured/mat4.jpg"
              styles="rounded-xl"
              show={true}
            />
            <CardSlanted
              title="Welcoming new ones"
              image="src/assets/images/featured/new4.jpg"
              styles="rounded-xl"
              show={true}
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export const ViewSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="py-12 view-slider-sc">
      <div className="containers">
        <div className="border-3 rounded-xl h-[580px] relative overflow-hidden">
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            {...settings}
          >
            <div className="h-[580px] overflow-hidden relative outline-none">
              <img
                src="src/assets/images/slider1.jpg"
                className="object-fit-cover"
                alt=""
              />
              <div className="absolute top-5 w-[280px] px-4 py-5 left-5 bg-white/80 right-5 default-shadow rounded">
                <p className="font-inter text-sm">By Marcus Arthur - 16th May, 2023</p>
                <p className="mt-1 font-semibold font-inter text-dark">Thanks Giving Day, 2022</p>
              </div>
            </div>
            <div className="h-[580px] overflow-hidden relative outline-none">
              <img
                src="src/assets/images/slider2.jpg"
                className="object-fit-cover"
                alt=""
              />
              <div className="absolute top-5 w-[280px] px-4 py-5 left-5 bg-white/80 right-5 default-shadow rounded">
                <p className="font-inter text-sm">By Marcus Arthur - 16th May, 2023</p>
                <p className="mt-1 font-semibold font-inter text-dark">Thanks Giving Day, 2022</p>
              </div>
            </div>
            <div className="h-[580px] overflow-hidden relative outline-none">
              <img
                src="src/assets/images/slider3.jpg"
                className="object-fit-cover"
                alt=""
              />
              <div className="absolute top-5 w-[280px] px-4 py-5 left-5 bg-white/80 right-5 default-shadow rounded">
                <p className="font-inter text-sm">By Marcus Arthur - 16th May, 2023</p>
                <p className="mt-1 font-semibold font-inter text-dark">Thanks Giving Day, 2022</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  return (
    <section className="py-12">
      <div className="containers">
        <div className="section-title text-center">
          <h2 className="text-3xl font-inter font-bold">
            The{" "}
            <span className="text-new-blue font-semibold leading-loose text-moonstone">
              Colourful
            </span>{" "}
            smartest choice for creatives like you
          </h2>
          <p className="text-base text-dark/80 opacity-70">
            We keep the perfect collection the photos that you upload.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="left mt-24 flex flex-col gap-8">
            <Card1
              icon={<AiOutlineStar size={30} />}
              title="High-quality stock content"
              desc="Download scroll-stopping images of the best quality to make your projects look professional."
            />
            <Card1
              icon={<AiOutlineLike size={30} />}
              title="Ready-to-use assets"
              desc="Access thousands of images and designs ready-to-publish and get your project ready double quick."
            />
            <Card1
              icon={<AiOutlineSearch size={30} />}
              title="Guaranteed search results"
              desc="There’s an image and style for every project, whatever your needs are."
            />
            <Card1
              icon={<BsArrowRepeat size={30} />}
              title="Fresh content everyday"
              desc="Our library is updated on a daily basis so you can find the newest and trendiest photos and designs."
            />
          </div>
          <div className="right">
            <img
              src="src/assets/images/banner1.webp"
              alt="banner1"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export const Explore3 = () => {
  return (
    <>
      <section className="explore3 flex justify-center items-center flex-col">
        <div className="containers text-white flex items-center justify-between">
          <div className="left">
            <h3 className="text-lg font-medium">
              Welcome to the new{" "}
              <span className="text-orange-500">SnapHub calendar</span>
            </h3>
            <h2 className="text-2xl font-medium mt-5 mb-8">
              <span className="text-orange-500">
                All celebrations and events{" "}
              </span>{" "}
              <br />
              are at your fingertips
            </h2>
            <Button
              size="lg"
              variant="text"
              color="white"
              className="bg-[rgba(255,255,255,0.1)]"
            >
              Browse calendar
            </Button>
          </div>
          <div className="right">
            <div className="w-full h-full object-contain pt-32">
              <img
                src="/src/assets/images/banner2.webp"
                alt="banner2"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const Explore4 = () => {
  return (
    <>
      <section className="explore4 mt-12 h-[40vh]">
        <div className="containers px-32 bg-indigo-50 rounded-xl flex items-center justify-between">
          <div className="left">
            <h2 className="text-3xl font-semibold">
              Join SnapHub
              <span className="text-indigo-500"> creator community </span>
            </h2>
            <p className="my-5">
              Behind every stock image, there’s a creative mind. You can also
              create content and sell it on Freepik
            </p>
            <Button size="lg" color="indigo">
              Sell content
            </Button>
          </div>
          <div className="right h-[40vh]">
            <div className="w-full h-full object-contain">
              <img
                src="/src/assets/images/banner3.webp"
                alt="banner2"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Card = ({ title, image, styles, show, gridClass }) => {
  return (
    <div
      className={`card shadow rounded overflow-hidden relative ${gridClass} overlay-black-gradient group`}
    >
      <img
        src={image}
        alt="title"
        className={`w-full h-full object-cover block group-hover:scale-110 group-hover:rotate-6 default-transition`}
      />
      <h2 className="capitalize font-medium mt-5 text-white absolute bottom-0 m-5 z-30 font-inter">
        {title}
      </h2>
      {show && (
        <div
          className={`${styles} overlay absolute top-0 w-full bg-gray-400 rotate-6 -z-10`}
        ></div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any,
  styles: PropTypes.any,
  show: PropTypes.any,
  gridClass: PropTypes.string,
};

export const CardSlanted = ({ title, image, styles, show }) => {
  return (
    <div className="px-2">
      <div
        className="card text-start rounded-xl relative group my-3"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <div
          className={`${styles} w-full object-cover overflow-hidden relative after:absolute after:content-[''] after:top-1 after:left-1 after:right-1 after:bottom-1 after:border-white after:border-2 after:rounded-xl`}
        >
          <img
            src={image}
            alt="title"
            className={`${styles} object-cover min-h-[225px] xxl:h-[360px] xxl:w-[240px] w-[180px] h-[280px]`}
          />
        </div>
        <h2 className="capitalize font-medium mt-5 text-white absolute bottom-0 xxl:m-4 m-3 leading-[1.3] xxl:text-base text-[15px] z-30 font-inter">
          {title}
        </h2>
      </div>
    </div>
  );
};

CardSlanted.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any,
  styles: PropTypes.any,
  show: PropTypes.any,
  gridClass: PropTypes.string,
};

export const Card1 = ({ title, icon, desc }) => {
  return (
    <div className="box flex gap-5">
      <div className="icon flex items-center justify-center text-primary bg-red-100 w-16 h-16 rounded-lg">
        {icon}
      </div>
      <div className="details">
        <h3 className="text-xl font-medium mb-2"> {title}</h3>
        <p className="text-sm">{desc} </p>
      </div>
    </div>
  );
};

Card1.propTypes = {
  title: PropTypes.any,
  icon: PropTypes.any,
  desc: PropTypes.any,
};

export const Explore5 = () => {
  return (
    <>
      <section className="bg-gray-50 py-12">
        <section className="containers">
          <div className="text-center">
            <TitleHeading title1="Stories from our contributors" />
            <p>
              Surf categories of professional photos to express your ideas and
              connect with your audience
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-12">
            <SellContentHeroCards
              cover="https://img.freepik.com/free-photo/front-view-smiley-women-taking-selfie_23-2149734544.jpg?size=338&ext=jpg"
              category="People and emotions"
            />
            <SellContentHeroCards
              cover="https://img.freepik.com/free-photo/woman-wearing-sundress_23-2150388737.jpg?size=338&ext=jpg"
              category="Lifestyle, health and wellness"
            />
            <SellContentHeroCards
              cover="https://img.freepik.com/premium-photo/multiethnic-school-kids-teacher-using-smartphone-modern-classroom_116547-33703.jpg?size=338&ext=jpg"
              category="Education and learning"
            />
            <SellContentHeroCards
              cover="https://img.freepik.com/free-photo/happy-woman-using-lap-top-while-sitting-airport-lounge_273443-4233.jpg?size=338&ext=jpg"
              category="Business and marketing"
            />
            <SellContentHeroCards
              cover="https://img.freepik.com/premium-photo/aerial-top-view-forest-tree-rainforest-ecosystem-drone-photography-lake-middle-forest-slovakia_527096-4745.jpg?size=338&ext=jpg"
              category="Nature"
            />
            <SellContentHeroCards
              cover="https://img.freepik.com/free-photo/top-view-appetizing-pozole-bowl_23-2149248515.jpg?size=338&ext=jpg"
              category="Food and drink"
            />
            <SellContentHeroCards
              cover="https://img.freepik.com/free-photo/men-training-capoeira-beach_52683-101105.jpg?size=338&ext=jpg"
              category="Sport"
            />
            <SellContentHeroCards
              cover="https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-124731.jpg?size=338&ext=jpg"
              category="Industry and technology"
            />
          </div>
        </section>
      </section>
    </>
  );
};
export const Explore6 = () => {
  return (
    <>
      <section className="py-12">
        <section className="containers">
          <div className="text-left">
            <TitleHeading title1="Keep consistency in your designs" />
            <p>
              Ensure consistency in your creative process by easily finding all
              the photos in the same series
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="box">
              <div className="h-56">
                <img
                  className=" rounded-t-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/full-shot-women-sitting-stairs-with-cat_23-2149522123.jpg?size=626&ext=jpg"
                  alt=""
                />
              </div>
              <div className="h-32 flex justify-between items-center gap-2 mt-2">
                <img
                  className=" rounded-bl-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/full-shot-woman-wearing-hijab_23-2149522155.jpg?size=626&ext=jpg"
                  alt=""
                />
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/young-woman-wearing-hijab-medium-shot_23-2149522105.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
                <img
                  className=" rounded-br-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/high-angle-young-woman-wearing-hijab_23-2149522144.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
            <div className="box">
              <div className="h-56">
                <img
                  className=" rounded-t-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/smiley-woman-playing-badminton-front-view_23-2149733043.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
              <div className="h-32 flex justify-between items-center gap-2 mt-2">
                <img
                  className=" rounded-bl-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/side-view-man-holding-badminton-racket_23-2149733050.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/full-shot-people-playing-badminton_23-2149733013.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
                <img
                  className=" rounded-br-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/front-view-smiley-woman-holding-racket_23-2149732986.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
            <div className="box">
              <div className="h-56">
                <img
                  className=" rounded-t-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/full-shot-woman-posing-romantic-garden_23-2150316911.jpg?size=626&ext=jpg&ga=GA1.2.1279315338.1690169622"
                  alt=""
                />
              </div>
              <div className="h-32 flex justify-between items-center gap-2 mt-2">
                <img
                  className=" rounded-bl-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/medium-shot-woman-posing-romantic-garden_23-2150316907.jpg?size=626&ext=jpg&ga=GA1.2.1279315338.1690169622"
                  alt=""
                />
                <img
                  className="w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/medium-shot-woman-posing-romantic-garden_23-2150316909.jpg?size=626&ext=jpg&ga=GA1.2.1279315338.1690169622"
                  alt=""
                />
                <img
                  className=" rounded-br-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/medium-shot-woman-posing-romantic-garden_23-2150316939.jpg?size=626&ext=jpg&ga=GA1.2.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export const Explore7 = () => {
  return (
    <>
      <section className="py-12">
        <section className="containers">
          <div className="text-left">
            <TitleHeading title1="The inspiration gallery" />
            <p>
              Explore curated collections and discover images, moods, and styles
              to ignite your creativity
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/medium-shot-woman-working-late-night_23-2150170690.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src="https://img.freepik.com/free-photo/full-shot-artisan-doing-woodcutting_23-2150104858.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src="https://img.freepik.com/free-photo/portrait-woman-wearing-shapewear_23-2149749585.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/friends-having-fun-their-reunion_23-2149144289.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src="https://img.freepik.com/premium-photo/vertical-shot-melted-pink-ice-cream-colorful-background_181624-52455.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src="https://img.freepik.com/free-photo/female-s-hand-holding-delicious-soft-ice-cream-crispy-waffle-cone-pink-scene_181624-48250.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src="https://img.freepik.com/premium-photo/african-american-black-beautiful-young-woman-eating-hamburger-isolated-yellow-background_255757-3111.jpg?size=626&ext=jpg&ga=GA1.2.1279315338.1690169622"
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src="https://img.freepik.com/premium-photo/burger-cooking-poster-hands-put-cutlet-bun-pineapple-bun-creative-poster-with-flying-tempest_207126-7668.jpg?size=626&ext=jpg&ga=GA1.2.1279315338.1690169622"
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src="https://img.freepik.com/free-photo/close-up-hand-holding-delicious-burger_23-2149160036.jpg?size=626&ext=jpg&ga=GA1.2.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src="https://img.freepik.com/premium-photo/female-athletes-communicating-while-taking-break-from-marathon-race-nature-focus-is-woman-drinking-water-from-bottle_637285-6650.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src="https://img.freepik.com/free-photo/side-view-woman-drinking-water-outdoors_23-2149514601.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src="https://img.freepik.com/free-photo/front-view-woman-drinking-water_23-2149622957.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/female-wedding-planner-working-with-client_23-2150167194.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-holding-open-sign_23-2149871140.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src="https://img.freepik.com/free-photo/albino-person-home-doing-activities_23-2150064997.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
            <div className="box h-96 overflow-hidden flex items-center gap-1">
              <div className="h-96 w-1/2">
                <img
                  className="rounded-l-lg w-full h-full object-cover"
                  src="https://img.freepik.com/free-photo/woman-listens-music-headphones-scrolls-social-networks-via-smartphone-takes-break-after-workout-poses-outside-against-modern-glass-buiding-being-good-mood_273609-55196.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
              <div className="h-96 w-1/2">
                <img
                  className="rounded-tr-lg w-full object-cover h-[12rem]"
                  src="https://img.freepik.com/free-photo/woman-listens-music-headphones-scrolls-social-networks-via-smartphone-takes-break-after-workout-poses-outside-against-modern-glass-buiding-being-good-mood_273609-55196.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
                <img
                  className="rounded-br-xl w-full object-cover mt-1 h-[12rem]"
                  src="https://img.freepik.com/free-photo/yoga-mat-water-bottle-high-angle_23-2149442711.jpg?size=626&ext=jpg&ga=GA1.1.1279315338.1690169622"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
