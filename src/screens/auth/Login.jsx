// import { validateEmail } from "@/redux/services/authService";
// import { RESET, login, sendLoginCode } from "@/redux/slices/authSlice";
// import { LogoComponent } from "@/routes";
import { IconButton, Input } from "@material-tailwind/react";
// import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsEnvelope, BsFacebook, BsMailbox } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/common/Loader";
import { Link } from "react-router-dom";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { PiSmileySad } from "react-icons/pi";

const initialSate = {
  password: "",
  email: "",
};

export default function Login({ cover }) {
  // const navigate = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialSate);

  const { isLoading, isSuccess, isError, isLoggedIn, twoFactor } = useSelector(
    (state) => state.auth
  );
  const { password, email } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      // return toast.error("All fields are required");
    }
    // if (!validateEmail(email)) {
    //   return toast.error("Email is not valid");
    // }
    const userData = {
      email,
      password,
    };
    // await dispatch(login(userData));
  };

  // useEffect(() => {
  //   if (isSuccess && isLoggedIn) {
  //     navigate.push("/");
  //   }
  //   // login with otp
  //   if (isError && twoFactor) {
  //     dispatch(sendLoginCode(email));
  //     navigate.push(`/auth/otp/${email}`);
  //   }
  //   dispatch(RESET());
  // }, [dispatch, isLoggedIn, isSuccess, navigate, isError, twoFactor]);

  return (
    <>
      <section className="login">
        <div className="containers">
          <div className="grid grid-cols-2 items-stretch my-16 bg-blue-gradient rounded-2xl shadow-auth">
            <div className="flex items-center justify-end p-12 relative">
              <img
                src="/src/assets/images/login_illus.svg"
                alt="cover"
                className="w-full"
              />
            </div>
            <div className="bg-white px-12 pt-12 pb-6 relative flex flex-col justify-between">
              <div>
                <h3 className="text-4xl text-center mt-12 font-inter font-bold text-dark">
                  Login
                </h3>
                {isLoading && <Loader />}
                <form className="flex flex-col gap-5 my-5" onSubmit={loginUser}>
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="w-full h-[48px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90"
                    />
                    <span className="w-[48px] h-[48px] flex items-center justify-center text-dark-blue">
                      <FaEnvelope />
                    </span>
                  </div>
                  <div className="border-b-[1px] text-base flex items-stretch form-element">
                    <input
                      type="text"
                      placeholder="Password"
                      className="w-full h-[48px] text-dark-blue placeholder:text-dark-blue/60 outline-none opacity-90"
                    />
                    <span className="w-[48px] h-[48px] flex items-center justify-center text-dark-blue">
                      <FaKey />
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-gradient text-white rounded  min-h-[52px] uppercase font-inter font-semibold tracking-[1px] shadow-button mt-3 hover:scale-105 default-transition"
                  >
                    proceed to login
                  </button>
                </form>
                <div className="text-base text-center font-inter mt-10">
                  <p className="inline opacity-70">
                    Don’t you have an account?
                  </p>
                  <Link
                    href="/register"
                    className="text-moonstone font-semibold mx-2"
                  >
                    Sign up
                  </Link>
                </div>
                <div className="text-center mt-3 flex items-center justify-center">
                  <PiSmileySad size={24} />
                  <Link
                    href="/forgetpassword"
                    className="text-dark font-semibold font-inter text-base ms-2"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              {/* <div className="text-lg w-10 h-10 flex items-center justify-center rounded-full bg-dark mx-auto text-center text-white my-8 font-semibold fon-inter">
                OR
              </div>
              <div className="flex items-center justify-center gap-4">
                <IconButton size="lg" variant="outlined" color="blue-gray">
                  <FcGoogle size={25} color="white" />
                </IconButton>
                <IconButton size="lg" variant="outlined" color="blue">
                  <BsFacebook size={25} color="blue" />
                </IconButton>
                <IconButton size="lg" variant="outlined" color="red">
                  <HiOutlineMail size={25} color="red" />
                </IconButton>
              </div> */}
              <div className="border-t-[1px] border-dark/10 pt-4">
                <p className=" text-white font-semibold text-2xl text-blue-gradient text-center mt-auto">
                  PhotoIdol Studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
