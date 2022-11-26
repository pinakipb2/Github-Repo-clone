import clsx from 'clsx';
import cuid from 'cuid';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import Github from './SVGS/Github';

const Navbar = () => {
  const [isSearchFocus, setIsSearchFocus] = useState<boolean>(false);
  interface Menu {
    id: string;
    name: string;
    isArrow: boolean;
  }
  const menu: Menu[] = [
    {
      id: cuid(),
      name: 'Product',
      isArrow: true,
    },
    {
      id: cuid(),
      name: 'Solutions',
      isArrow: true,
    },
    {
      id: cuid(),
      name: 'Open Source',
      isArrow: true,
    },
    {
      id: cuid(),
      name: 'Pricing',
      isArrow: false,
    },
  ];
  return (
    <>
      <div className="relative lg:hidden h-[65px] w-full bg-[#161B22] flex text-white items-center justify-between px-[4%] sm:px-[6%]">
        <button className="text-sm py-[4px] px-[8px] rounded-md border border-white/20 bg-transparent shrink-0 outline-0">Sign up</button>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <Link href="/">
            <Github className="h-[32px] w-[32px] hover:cursor-pointer" />
          </Link>
        </div>
        <BiMenu className="w-[30px] h-[30px] hover:cursor-pointer shrink-0" />
      </div>
      <div className="hidden lg:flex h-[72px] w-full bg-[#161B22] text-white items-center px-[6%] gap-6">
        <Link href="/">
          <Github className="h-[32px] w-[32px] hover:cursor-pointer" />
        </Link>
        <div className="flex gap-4">
          {menu.map((item) => (
            <div key={item.id} className="flex items-center group hover:cursor-pointer hover:text-white/80 shrink-0 gap-[3px]">
              {item.name}
              {item.isArrow && (
                <div className="pt-1 group-hover:pt-2 duration-100 ease-in-out text-white/60 group-hover:text-white/40">
                  <IoIosArrowDown className="shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-end gap-3">
          <div className="relative flex items-center">
            <input
              placeholder="Search"
              className="rounded-[6px] border border-white/20 bg-[#0d1117] px-3 py-[7px] outline-0 w-[245px] shrink-0 text-sm"
              onFocus={() => setIsSearchFocus(true)}
              onBlur={() => setIsSearchFocus(false)}
            />
            <div className={clsx([isSearchFocus && 'hidden'], ' absolute right-[10px] text-[0.7rem] border-[1.5px] border-white/20 px-[5.9px] py-[0.8px] rounded-[3px] text-white/60')}>/</div>
          </div>
          <button className="py-[4px] px-[8px] bg-transparent shrink-0 outline-0 hover:text-white/80">Sign in</button>
          <button className="py-[4px] h-full px-[8px] rounded-md border border-white/20 bg-transparent shrink-0 outline-0 hover:text-white/80">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
