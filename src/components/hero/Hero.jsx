import { Input, Menu, MenuHandler, MenuList, MenuItem, Checkbox, Button } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Hero = () => {
  return (
    <>
      <section className="" style={{
        background: "linear-gradient(90deg, rgba(233,111,104,1) 0%, rgba(131,37,31,1) 100%)"
      }}>
        <div className="w-3/5 py-12 m-auto text-white text-center max-w-[680px] mx-auto">
          <h2 className="text-4xl font-semibold lg:leading-loose leading-[1.4] lg:mb-1 mb-5">All the memories in one place</h2>
          <h4 className="text-xl">Find all your photo collection in an organized way.</h4>
          <div className="mt-8">
            <SearchBox color="bg-white" shadow="shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export const SearchBox = ({ color, shadow }) => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className={`${color} relative flex w-full rounded-md border border-gray-300 ${shadow}`}>
        <Input
          type="text"
          placeholder="Search all assets"
          className="border-none w-full placeholder:text-sm"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
          icon={
            <Link href="/search">
              <BiSearch size={25} />
            </Link>
          }
        />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  color: PropTypes.any,
  shadow: PropTypes.any
}

export const Card = ({ title, image }) => {
  return (
    <div className="card text-center">
      <div className="image w-60 h-40 overflow-hidden border-[3px] border-[rgba(255,255,255,0.6)] rounded-xl">
        {image && <img src={image} alt="title" className="object-cover w-full h-full p-1 rounded-xl transition ease-in-out duration-300 hover:scale-125 hover:rotate-6" />}
      </div>
      <h2 className="capitalize mt-5 text-white">{title}</h2>
    </div>
  );
};


Card.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any
}