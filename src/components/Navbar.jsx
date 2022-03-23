import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuLink = ({ children, icon }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <div className="w-40 h-11 p-1 bg-white">
          <div
            className={`w-full h-full flex gap-2 items-center pl-2 text-md ${
              active ? 'bg-zinc-200 text-sky-600' : 'bg-white'
            } font-medium text-zinc-700 transiton rounded-md cursor-pointer`}
          >
            {icon}
            {children}
          </div>
        </div>
      )}
    </Menu.Item>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const userGlobal = useSelector((state) => state.user);

  console.log(userGlobal);

  return (
    <div className="absolute top-0 h-16 w-full bg-transparent flex items-center px-10 justify-between text-white font-bold">
      <span className="hover:text-sky-200 cursor-pointer transition duration-75 text-lg">WhatTodos</span>
      {userGlobal.username ? (
        <Menu as="div" className="relative">
          <Menu.Button as="div" className="hover:text-sky-200 cursor-pointer font-bold transition">
            Hello, {userGlobal.username}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items as="div" className="top-8 right-2 absolute overflow-hidden rounded-lg focus:outline-none shadow shadow-gray-300">
              <MenuLink icon={<AiOutlineUser />}>Profile</MenuLink>
              <MenuLink icon={<FiSettings />}>Settings</MenuLink>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <span
          className="font-bold text-lg hover:text-sky-200 cursor-pointer"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </span>
      )}
    </div>
  );
};

export default Navbar;
