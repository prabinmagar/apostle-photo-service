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

export const Header = () => {
  return (
    <>
      <header className="px-8 m-0 py-4 w-full shadow-none rounded-none border-none" style={{
        background: `linear-gradient(90deg, rgba(0,143,161,0.8) 0%, rgba(0,188,212,0.6) 100%), url("/src/assets/images/hero.jpg")`
      }}>
        <div className="flex items-center justify-between text-white">
          <div className="flex">
            <span className=" text-white font-bold tracking-[1px] xl:text-2xl xl">Photo Idol.</span>
          </div>
          <div className="text-sm flex gap-5 items-center">
            <Link href="/auth/login" className="font-semibold uppercase tracking-[1px] font-inter flex items-center"><BiLogInCircle size = { 18 } className="me-[6px]" /> Login</Link>
            <Link href="/auth/register" className="border border-white px-4 py-[8px] rounded font-semibold uppercase tracking-[1px] hover:bg-white hover:text-moonstone transition-all ease-in-out duration-200" style={{ boxShadow: "rgba(99, 99, 99, 0.15) 0px 2px 8px 0px"}}>
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export const UserProfileAfterLogin = ({ logoutUser, photo, username }) => {
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Avatar src={photo} size="sm" variant="circular" alt={username} className="cursor-pointer" />
      </MenuHandler>
      <MenuList>
        <Link href="/sellcontent/dashboard" className="outline-none">
          <MenuItem className="flex items-center gap-2">
            <AiOutlineDashboard size={18} />
            <Typography variant="small" className="font-normal">
              Dashboard
            </Typography>
          </MenuItem>
        </Link>
        <Link href="/user/profile" className=" outline-none border-none">
          <MenuItem className="flex items-center gap-2">
            <BiUserCircle size={18} />
            <Typography variant="small" className="font-normal">
              My Profile
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem className="flex items-center gap-2">
          <AiOutlineSetting size={18} />
          <Typography variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>

        <MenuItem className="flex items-center gap-2">
          <BiHelpCircle size={18} />
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 " onClick={logoutUser}>
          <AiOutlinePoweroff size={18} />
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

UserProfileAfterLogin.propTypes = {
  logoutUser: PropTypes.any,
  photo: PropTypes.any,
  username: PropTypes.any
}
