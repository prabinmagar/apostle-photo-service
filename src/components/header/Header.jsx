import { Typography, List, Menu, MenuHandler, MenuList, Tabs, TabsHeader, Tab, TabsBody, TabPanel, Avatar, MenuItem, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BiChevronDown, BiHelpCircle, BiUserCircle, BiLogInCircle } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlinePoweroff, AiOutlineSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ShowOnLogout, ShowOnLogin } from "../protect/HiddenLink";
import { Link } from "react-router-dom";
import { RESET, logout, selectUser } from "../../redux/slices/authSlice";
import PropTypes from 'prop-types';
import { AiOutlineUpload } from 'react-icons/ai';
import { staticImages } from "../../images";

export const Header = () => {
  return (
    <>
      <header className="m-0 py-4 w-full shadow-none rounded-none border-none" style={{
        background: `linear-gradient(90deg, rgba(0,143,161,0.8) 0%, rgba(0,188,212,0.6) 100%), url("${staticImages.hero}")`
      }}>
        <div className="flex items-center justify-between text-white max-w-[1400px] mx-auto px-4">
          <Link to ="/" className="flex">
            <span className=" text-white font-bold tracking-[1px] xl:text-2xl text-xl">Photo Idol.</span>
          </Link>
          <div className="text-sm flex gap-5 items-center">
            <Link to="/login" className="font-semibold uppercase tracking-[1px] font-inter flex items-center"><BiLogInCircle size = { 18 } className="me-[6px]" /> Login</Link>
            <Link to="/register" className="border border-white px-4 py-[8px] rounded font-semibold uppercase tracking-[1px] hover:bg-white hover:text-moonstone transition-all ease-in-out duration-200" style={{ boxShadow: "rgba(99, 99, 99, 0.15) 0px 2px 8px 0px"}}>
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
