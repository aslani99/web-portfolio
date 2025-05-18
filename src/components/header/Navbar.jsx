import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { BlurShaderUtils } from "three-stdlib";
// import Earth from "./Earth";
import { useTranslation } from 'react-i18next';


const navigation = [
  { name: "Home", href: "#hero", current: true },
  { name: "About Me", href: "#about", current: false },
  // { name: "Resume", href: "#resume", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact Me", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Navbar() {

  return (


    
    <Disclosure as="nav" className="backdrop-blur-sm fixed right-0 left-0 border-1 text-shadow-black text-shadow-2xs ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" >
        <div className="relative flex h-14 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className=" group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <a href="#hero" className="flex shrink-0 items-center cursor-pointer " >
              <img
                alt="Your Company"
                src="PM.png"
                className="h-auto w-10"
                
              />


            </a>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white "
                        : "text-gray-400 hover:bg-gray-700 hover:text-gray-100",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3 ">
              <div>
                <MenuButton className="relative flex rounded-md border border-gray-600 bg-gray-900 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden cursor-pointer">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {/* <img
                    alt=""
                    src="./icons8-user-60.png"
                    className="size-8 rounded-ful bg-black cursor-pointer"
                  /> */}

                    <p className="py-2 px-4 text-white cursor-pointer ">Settings</p>


                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-50 mt-2 w-48 origin-top-right  py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in border border-amber-50 rounded-md "
                 style={{ backdropFilter: 'blur(4px)', transform: 'translateZ(0)', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
              >
                {/* <MenuItem>
                  <a
                    href="#"
                    className=" px-4 py-2 text-sm text-white   relative block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white	 after:transition-all after:duration-300 "
                  >
                    🌗 Dark / Light Mode
                  </a>
                </MenuItem> */}
                <MenuItem>
                  <a
                    href="#"
                    className=" px-4 py-2 text-sm text-white relative block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 "
                  >
                     🌍 EN | FA
                  </a>
                </MenuItem>
                {/* <MenuItem>
                  <a
                    href="#"
                    className=" px-4 py-2 text-sm text-white relative block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300"
                  >
                    Sign out
                  </a>
                </MenuItem> */}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden cursor-pointer">
        <div className="space-y-1 px-2 pt-2 pb-3 ">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white "
                  : "text-gray-400 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium "
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
