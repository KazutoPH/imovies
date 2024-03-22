import { navList } from "@/constants/constant";
import React, { useState } from "react";
import { FaBars, FaBurger } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SideNav from "./sidenav";

const NavBar = () => {
  const [ishover, setIsHover] = useState(false);
  const [selectedHover, setSelectedHover] = useState(0);
  const [sideNavPress, setSideNavPress] = useState(false);
  return (
    <>
      <div className="md:flex flex-row gap-2 hidden relative overflow-visible">
        {navList.map((nav, i) => (
          <div
            key={i}
            onMouseEnter={() => {
              setSelectedHover(i);
              setIsHover(true);
            }}
            onMouseLeave={() => {
              setIsHover(false);
            }}
            onClick={() => setIsHover(false)}
          >
            <Link href={`/list?type=${nav.type}&query=popular`}>
              <div className="p-2 -my-2 hover:bg-grey ease-in transition rounded">
                <p className="font-semibold text-xl text-white whitespace-nowrap">
                  {nav.name}
                </p>
              </div>
            </Link>

            {ishover && selectedHover === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ height: 0 }}
                className="w-max flex-col absolute right-0 rounded overflow-hidden"
              >
                <div className=" bg-darkgrey w-full py-2 px-1 mt-4">
                  <div className="grid grid-cols-3">
                    {nav.category.map((category, x) => (
                      <Link
                        href={
                          category.id
                            ? `/list?type=${
                                nav.type
                              }&genre=${category.name.replace(
                                /&/g,
                                "and"
                              )}&genreID=${category.id}`
                            : `/list?type=${nav.type}&query=${category.filter}`
                        }
                        key={x}
                      >
                        <div className="hover:bg-grey ease-in transition hover:cursor-pointer py-2 px-4">
                          <p className=" font-medium text-base text-white whitespace-nowrap">
                            {category.name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;
