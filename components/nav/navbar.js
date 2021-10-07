import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import MobileMenu from "./mobile-menu";

const navigation = [
  {
    name: "Library",
    disabled: false,
  },
  {
    name: "Social",
    disabled: true,
  },
  {
    name: "Calendar",
    disabled: true,
  },
  {
    name: "Jobs",
    disabled: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({
  setSection,
  section,
  secondaryNavigationData,
  secondaryNavigation,
  setSecondaryNavigation,
}) {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-5 lg:px-5">
            <div className="flex justify-between h-16">
              {/* Logo and Navigation */}
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center pt-1">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width="170px"
                    height="150px"
                  />
                </div>
                <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map((item) => (
                    <button
                      disabled={item.disabled}
                      key={item.name}
                      className={classNames(
                        item.name === section
                          ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-gray-500  hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                        "block px- py-2 text-sm text-gray-700",
                        item.disabled
                          ? "disabled:opacity-50 cursor-not-allowed"
                          : "hover:border-gray-300"
                      )}
                      onClick={() => setSection(item.name)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search bar */}
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      disabled
                      className="disabled:opacity-50 cursor-not-allowed block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Notifications and Profile Buttons */}
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  className="flex-shrink-0 cursor-not-allowed bg-white p-1 text-gray-400 disabled:opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-4 relative flex-shrink-0">
                  <div>
                    {/* Disable for now */}
                    <Menu.Button
                      disabled
                      className="bg-white cursor-not-allowed disabled:opacity-50 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-2"
                    >
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="/avatar.svg"
                        height="32px"
                        width="32px"
                        alt="avatar"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <MobileMenu
            navigation={navigation}
            secondaryNavigationData={secondaryNavigationData}
            section={section}
            setSection={setSection}
            secondaryNavigation={secondaryNavigation}
            setSecondaryNavigation={setSecondaryNavigation}
          />
        </>
      )}
    </Disclosure>
  );
}

Navbar.prototype = {
  setSection: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  secondaryNavigationData: PropTypes.object.isRequired,
  secondaryNavigation: PropTypes.string.isRequired,
  setSecondaryNavigation: PropTypes.func.isRequired,
};

export default React.memo(Navbar);