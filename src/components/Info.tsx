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

const Link = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
      ></path>
    </svg>
  );
};

const Info = () => {
  return (
    <div className="bg-[#0d1117] w-full flex flex-col px-[15px] py-[15px] gap-y-3">
      <div className="flex items-center gap-x-2 text-lg">
        <Repo className="fill-[#8b949e]" />
        <span className="text-[#58a6ff] hover:underline hover:cursor-pointer">pinakipb2</span>
        <span className="text-[#8b949e] -ml-[3px] -mr-[3px]">/</span>
        <span className="text-[#58a6ff] hover:underline hover:cursor-pointer font-semibold">YT-clone</span>
        <div className="border rounded-xl text-xs text-[#8b949e] border-[#30363d] px-2 pb-[1px]">Public</div>
      </div>
      <div className="text-[#f0f6fc] text-[16px] mb-2">NextJS, Tailwind</div>
      <div className="flex items-center gap-x-2">
        <Link className="fill-[#8b949e]" />
        <span className="text-[#58a6ff] hover:underline hover:cursor-pointer font-semibold text-sm">yt-clone-pinakipb2.vercel.app</span>
      </div>
      {/* stars and forks */}
      {/* buttons */}
    </div>
  );
};

export default Info;
