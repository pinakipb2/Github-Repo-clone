import Image from 'next/image';

const Branch = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
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

const History = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
      ></path>
    </svg>
  );
};

const Check = ({ className }: { className: string }) => {
  return (
    <svg aria-label="1 / 1 checks OK" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
    </svg>
  );
};

const Code = () => {
  return (
    <div className="bg-[#161b22] sm:bg-[#0d1117] w-full text-[#f0f6fc] px-[15px] py-[16px] flex flex-col gap-y-3">
      <div className="flex justify-between items-center w-full text-[#c9d1d9] text-sm font-semibold">
        <button className="flex items-center gap-x-2 w-fit bg-[#21262d] justify-center rounded-[6px] border select-none px-[12px] py-[5px] border-gray-700 hover:border-gray-400 hover:bg-[#30363d]">
          <Branch className="fill-[#8b949e] shrink-0" />
          main
          <DropDown className="h-[18px] w-[18px] -ml-[4px] fill-[#8b949e] shrink-0" />
        </button>
        <button className="flex items-center gap-x-2 w-fit bg-[#21262d] justify-center rounded-[6px] border select-none px-[18px] py-[5px] border-gray-700 hover:border-gray-400 hover:bg-[#30363d]">
          Go to file
        </button>
      </div>
      <div className="flex flex-col text-sm border rounded-[6px] border-gray-700">
        <div className="flex justify-between p-[16px] font-semibold border-b border-gray-700">
          <div className="flex items-center gap-x-2">
            <Image src="/avatar.png" alt="pinakipb2" width="600" height="600" className="rounded-full w-[24px] h-[24px] hover:cursor-pointer" />
            <div className="hover:underline hover:cursor-pointer">pinakipb2</div>
            <div className="hover:cursor-pointer bg-[#6E768166] hover:bg-[#388BFD66] rounded-[1px] px-1.5 text-xs h-[12px] w-[18px] text-center flex items-center justify-center pb-1">
              ...
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Check className="fill-[#3fb950] hover:cursor-pointer shrink-0" />
            <div className="font-normal text-[#8b949e] hover:text-[#58a6ff] hover:underline hover:cursor-pointer -ml-[6px]">5 days ago</div>
            <History className="fill-[#ffffff] hover:fill-[#58a6ff] hover:cursor-pointer shrink-0" />
          </div>
        </div>
        <div className="hover:underline hover:cursor-pointer text-center text-[#58a6ff] py-[10px] px-[16px]">View code</div>
      </div>
    </div>
  );
};

export default Code;
