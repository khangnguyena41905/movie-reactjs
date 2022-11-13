import React from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <Popover className="fixed z-10 w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-16"
                src="https://as1.ftcdn.net/v2/jpg/05/38/46/58/1000_F_538465893_XSGEFHuNnFJ9meR00KmzGkO9XEK3hriU.webp"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-rose-700"
            >
              Lịch chiếu
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-rose-700"
            >
              Cụm rạp
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-rose-700"
            >
              Tin tức
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-rose-700"
            >
              Ứng dụng
            </a>
          </Popover.Group>
          <UserNav />
        </div>
      </div>
    </Popover>
  );
}
