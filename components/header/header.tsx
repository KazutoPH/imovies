"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SearchBar from "./searchbar";
import SearchResults from "./searchResult";
import { FaBars, FaBurger } from "react-icons/fa6";
import SideNav from "./sidenav";
import { useSearchParams } from "next/navigation";
import NavBar from "./navbar";

function Header() {
  const [show, setShow] = useState(true);
  const [sideNavPress, setSideNavPress] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchbarFocus, setSearchBarFocus] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const controlNavbar = () => {
    if (window.scrollY === 0 || window.scrollY < 100) {
      setShow(true);
    } else {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  //disable scroll fuction when resize base on sidenavbar
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 768)
        (
          document.getElementById("maincontainer") as HTMLFormElement
        ).style.overflow = "auto";
    });
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  //enable or disable scroll base on sidenav
  useEffect(() => {
    if (sideNavPress)
      (
        document.getElementById("maincontainer") as HTMLFormElement
      ).style.overflow = "hidden";
    else
      (
        document.getElementById("maincontainer") as HTMLFormElement
      ).style.overflow = "auto";
  }, [sideNavPress]);

  return (
    <div className="relative z-40">
      <AnimatePresence initial={false}>
        <motion.div
          variants={{
            visible: { y: 0, opacity: 1, overflow: "visible" },
            hidden: { y: "-100%", opacity: 0, overflow: "hidden" },
          }}
          animate={show ? "visible" : "hidden"}
          transition={{ ease: "easeInOut", type: "keyframes" }}
          className={`fixed top-0 flex flex-col w-full items-center py-3 shadow-yellow-400 shadow-sm z-[50] bg-dark overflow-visible h-[60px] `}
        >
          <nav
            className={`content-container flex flex-row ${
              !search ? "gap-5" : ""
            } md:gap-10 items-center`}
          >
            <div className="md:hidden">
              <AnimatePresence initial={false}>
                {!search && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, overflow: "hidden", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Link href="/">
                      <div className="rounded-md px-2 bg-yellow-400">
                        <p className="font-extrabold text-2xl">iMovies</p>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className=" hidden md:flex">
              <Link href="/">
                <div className="rounded-md px-2 bg-yellow-400">
                  <p className="font-extrabold text-2xl">iMovies</p>
                </div>
              </Link>
            </div>

            <div className="w-full relative">
              <div className="flex-row w-full">
                <SearchBar
                  searchbarFocus={searchbarFocus}
                  setSearchBarFocus={setSearchBarFocus}
                />
              </div>
              <SearchResults />
            </div>

            <div className="md:flex flex-row gap-2 hidden relative overflow-visible">
              <NavBar />
            </div>

            <div className="md:hidden">
              <AnimatePresence initial={false}>
                {!search && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, overflow: "hidden", opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    onClick={() => {
                      setSideNavPress(!sideNavPress);
                    }}
                    className=" hover:cursor-pointer"
                  >
                    <FaBars size={30} color="white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {sideNavPress && (
          <SideNav
            setSideNavPress={setSideNavPress}
            sideNavPress={sideNavPress}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
