import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedText from "./AnimatedText";
import "../styles/style.css";
import logo from "../assets/images/dertylogo.png";
import bgImg from "../assets/images/startled-curly-haired-busy-young-woman-surrounded-by-yellow-laundry-loads-dirty-linen-does-home-chores-poses-through-washing-maching-door.jpg";
import DirtySVG from "./Timeline";
import { Link } from "react-router-dom";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className="h-screen w-screen flex flex-col ">
      <nav className="h-1/10 flex justify-between items-center p-4 bg-yellow-500">
        <div className="h-100 w-100 border-2 border-black rounded-full">
          <img className="logo" src={logo} alt="" />
        </div>
        <div>
          <Link
            to="/register"
            className=" hover:text-underline font-bold bg-black text-white py-2 px-4 rounded"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className=" hover:text-underline font-bold py-2 px-4 rounded"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </Link>
          {/* <a
            href="#"
            className=" hover:text-underline font-bold py-2 px-4 rounded"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <div className="h-9/10 flex flex-col flex-grow items-center justify-center pb-6 bg-yellow-500">
        <div className="mb-10 p-6 flex">
          {isHovered ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-9xl whitespace-nowrap mb-5 mr-5 font-bold tracking-tighter justify-center text-center flex items-end"
            >
              <AnimatedText text="Ahaa!" />
            </motion.div>
          ) : (
            <AnimatedText
              text="derty."
              className="text-9xl whitespace-nowrap mb-5 mr-5 font-bold tracking-tighter justify-center text-center flex items-end"
            />
          )}
          {isHovered ? (
            <motion.span
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="text-lg self-center"
            >
              We got you! Experience the{" "}
              <span className="font-bold text-red">"Speed"</span> of our pickup
              services.
            </motion.span>
          ) : (
            <span className="text-lg self-center">
              Life is too short for laundry. Use{" "}
              <span className="font-bold text-red"> "Derty"</span>, live more!
            </span>
          )}
        </div>

        {/* <AnimatedText text="hello" className="text-[200px]" /> */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="flex items-center">
            <input
              type="email"
              className="p-2 outline-none focus:ring-0 bg-whitesmoke-100"
              placeholder="Email address"
            />
            <a
              href="#"
              className="bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
              style={{
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              Sign Up For Derty
            </a>
          </div>
          <div className="h-full bg-black" style={{ width: "0.7px" }}></div>
          <a
            href="#"
            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Order a Pickup
          </a>

          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Order a Pickup <span aria-hidden="true">→</span>
          </a> */}
        </div>
        {/* <div>
          <DirtySVG />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
