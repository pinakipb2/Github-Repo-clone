import Link from 'next/link';

const Repo = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
      ></path>
    </svg>
  );
};

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

const Notification = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
      <path
        fillRule="evenodd"
        d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
      ></path>
    </svg>
  );
};

const DropDown = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
    </svg>
  );
};

const Info = () => {
  return (
    <div className="bg-[#0d1117] w-full flex flex-col md:flex-row px-[15px] md:px-[25px] xl:px-[30px] py-[15px] gap-y-3">
      <div className="flex items-center gap-x-2 text-lg md:text-xl">
        <Repo className="fill-[#8b949e] shrink-0" />
        <Link href="https://github.com/pinakipb2" rel="noopener noreferrer" target="_blank" className="shrink-0">
          <span className="text-[#58a6ff] hover:underline hover:cursor-pointer">pinakipb2</span>
        </Link>
        <span className="text-[#8b949e] -ml-[3px] -mr-[3px]">/</span>
        <Link href="https://github.com/pinakipb2/YT-clone" rel="noopener noreferrer" target="_blank" className="shrink-0">
          <span className="text-[#58a6ff] hover:underline hover:cursor-pointer font-semibold shrink-0">YT-clone</span>
        </Link>
        <div className="border rounded-xl text-xs text-[#8b949e] border-[#30363d] px-2 pb-[1px] font-semibold">Public</div>
      </div>
      <div className="text-[#f0f6fc] text-[16px] mb-2 md:hidden">NextJS, Tailwind</div>
      <div className="flex items-center gap-x-2 group w-auto md:hidden">
        <Chain className="fill-[#8b949e] shrink-0 w-fit group-hover:fill-[#58a6ff]" />
        <Link href="https://yt-clone-pinakipb2.vercel.app" rel="noopener noreferrer" target="_blank" className="shrink-0">
          <span className="text-[#58a6ff] hover:underline hover:cursor-pointer font-semibold text-sm shrink-0">yt-clone-pinakipb2.vercel.app</span>
        </Link>
      </div>
      <div className="flex gap-x-5 md:hidden">
        <div className="flex text-[#8b949e] group hover:text-[#58a6ff] hover:cursor-pointer items-center gap-x-2 text-sm">
          <Star className="fill-[#8b949e] group-hover:fill-[#58a6ff] shrink-0" />
          <div className="first-letter:font-semibold shrink-0">0 stars</div>
        </div>
        <div className="flex text-[#8b949e] group hover:text-[#58a6ff] hover:cursor-pointer items-center gap-x-2 text-sm">
          <Fork className="fill-[#8b949e] group-hover:fill-[#58a6ff] shrink-0" />
          <div className="first-letter:font-semibold shrink-0">0 forks</div>
        </div>
      </div>
      <div className="flex w-full text-[#c9d1d9] text-xs font-semibold gap-x-2 md:justify-end">
        <div className="flex items-center justify-center w-1/2 md:w-fit md:order-last">
          <button className="flex items-center gap-x-3 w-full bg-[#21262d] justify-center rounded-[6px] border select-none px-[12px] py-[5px] border-gray-700 rounded-r-none hover:border-gray-400 hover:bg-[#30363d]">
            <Star className="fill-[#8b949e] shrink-0" />
            Star
            <span className="hidden md:block bg-[#30363d] rounded-[2em] w-[16px] h-[16px] text-center">0</span>
          </button>
          <button
            className="flex items-center gap-x-2 w-[30px] bg-[#21262d] justify-center rounded-[6px] border-y border-r select-none px-[12px] py-[5px] border-gray-700 rounded-l-none hover:cursor-default"
            disabled
          >
            <DropDown className="fill-gray-600 shrink-0" />
          </button>
        </div>
        <button className="hidden md:flex items-center gap-x-2 w-1/2 bg-[#21262d] justify-center rounded-[6px] border select-none px-[12px] py-[5px] border-gray-700 hover:border-gray-400 hover:bg-[#30363d] md:w-fit">
          <Fork className="fill-[#8b949e] shrink-0" />
          Fork
          <span className="hidden md:block bg-[#30363d] rounded-[2em] w-[16px] h-[16px] text-center">0</span>
        </button>
        <button className="flex items-center gap-x-2 w-1/2 bg-[#21262d] justify-center rounded-[6px] border select-none px-[12px] py-[5px] border-gray-700 hover:border-gray-400 hover:bg-[#30363d] md:order-first md:w-fit">
          <Notification className="fill-[#8b949e] shrink-0" />
          Notifications
        </button>
      </div>
    </div>
  );
};

export default Info;
