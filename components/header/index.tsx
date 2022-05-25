import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import SearchBar from "./SearchBar";
import Theme from "./Theme";
import Language from "./Language";
import Basket from "./Basket";
import Login from "./Login";
import SideBar from "./SideNav/SideBar";
import en from "../../locales/en";
import fa from "../../locales/fa";

const Header = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;

  return (
    <div className="pt-4">
      <div>
        <div className="flex justify-between mb-2">
          <div className="flex items-center">
            <SideBar />

            <Link href="/">
              <a className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="zishop-logo"
                  width={120}
                  height={25}
                  objectFit="contain"
                  className="cursor-pointer ltr:-mr-3"
                />
              </a>
            </Link>
          </div>

          <div className="hidden md:block ltr:ml-4 rtl:mr-4 grow">
            <SearchBar />
          </div>

          {/* 💻 md break point -login and basket */}
          <div className="hidden md:flex items-center justify-between font-bold ltr:ml-4 rtl:mr-4">
            <Login modifier="md" />
            <Basket />
          </div>

          {/* 📱 sm break point -Theme and language*/}
          <div className="flex rtl:w-[4.1rem] ltr:w-[4.3rem] justify-between items-center md:hidden">
            <Language />
            <Theme />
          </div>
        </div>

        <hr />

        {/* 📱 sm break point */}
        <div className="md:hidden my-2 flex items-center">
          <SearchBar />
          <div className="ltr:ml-4 rtl:mr-4 flex items-center justify-between ltr:w-[4.1rem] rtl:w-[4.3rem] ">
            <Login />
            <Basket />
          </div>
        </div>

        {/* 💻 md break point */}
        <div className="hidden md:flex justify-between items-center my-3">
          <div className="grow"></div>
          <div className="flex items-center justify-between ltr:w-[10rem] rtl:w-[9.3rem]">
            <Language />
            <Theme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
