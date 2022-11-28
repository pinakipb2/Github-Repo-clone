import Link from 'next/link';
import Environments from './Environments';
import Languages from './Languages';

const Chain = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
      ></path>
    </svg>
  );
};

const Star = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      ></path>
    </svg>
  );
};

const Fork = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
      ></path>
    </svg>
  );
};

const Readme = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
      ></path>
    </svg>
  );
};

const Watching = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  );
};

const About = () => {
  return (
    <div className="pt-[15px] pb-[24px] text-[#f0f6fc] text-[16px] font-[600] space-y-3">
      <div className="">About</div>
      <div className="text-[#f0f6fc] text-[16px] font-normal pt-[8px]">NextJS, Tailwind</div>
      <div className="flex items-center gap-x-2 w-fit py-[6px]">
        <Chain className="fill-[#f0f6fc] shrink-0" />
        <Link href="https://yt-clone-pinakipb2.vercel.app" rel="noopener noreferrer" target="_blank" className="shrink-0">
          <span className="text-[#58a6ff] hover:underline hover:cursor-pointer font-semibold text-sm shrink-0">yt-clone-pinakipb2.vercel.app</span>
        </Link>
      </div>
      <div className="flex text-[#8b949e] group hover:text-[#58a6ff] hover:cursor-pointer items-center gap-x-2 text-sm">
        <Readme className="fill-[#8b949e] group-hover:fill-[#58a6ff] shrink-0" />
        <div className="shrink-0 font-normal">Readme</div>
      </div>
      <div className="flex text-[#8b949e] group hover:text-[#58a6ff] hover:cursor-pointer items-center gap-x-2 text-sm">
        <Star className="fill-[#8b949e] group-hover:fill-[#58a6ff] shrink-0" />
        <div className="first-letter:font-semibold shrink-0 font-normal">0 stars</div>
      </div>
      <div className="flex text-[#8b949e] group hover:text-[#58a6ff] hover:cursor-pointer items-center gap-x-2 text-sm">
        <Watching className="fill-[#8b949e] group-hover:fill-[#58a6ff] shrink-0" />
        <div className="first-letter:font-semibold shrink-0 font-normal">1 watching</div>
      </div>
      <div className="flex text-[#8b949e] group hover:text-[#58a6ff] hover:cursor-pointer items-center gap-x-2 text-sm">
        <Fork className="fill-[#8b949e] group-hover:fill-[#58a6ff] shrink-0" />
        <div className="first-letter:font-semibold shrink-0 font-normal">0 forks</div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col min-w-[265px] w-[265px] lg:min-w-[325px] lg:w-[325px] divide-y-2 divide-gray-800 pr-[15px]">
      <div className="-mr-[15px]">
        <About />
      </div>
      <div className="-mr-[15px]">
        <Environments />
      </div>
      <div className="-mr-[15px]">
        <Languages />
      </div>
    </div>
  );
};

export default Sidebar;
