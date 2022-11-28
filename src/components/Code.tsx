import clsx from 'clsx';
import cuid from 'cuid';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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

const Directory = ({ className }: { className: string }) => {
  return (
    <svg aria-label="Directory" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
    </svg>
  );
};

const File = ({ className }: { className: string }) => {
  return (
    <svg aria-label="File" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
      ></path>
    </svg>
  );
};

const Message = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
      ></path>
    </svg>
  );
};

const Tags = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"
      ></path>
    </svg>
  );
};

// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined;
  height: number | undefined;
}

// Hook
function useWindowSize(): boolean {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  // return windowSize;
  // true for greater than md
  return Number(windowSize.width) > 768 - 1;
}

const Code = () => {
  const size: boolean = useWindowSize();
  useEffect(() => {
    setShowRepoCode(size);
  }, [size]);
  const [showRepoCode, setShowRepoCode] = useState<boolean>(false);

  const repoCode = [
    {
      id: cuid(),
      name: 'public',
      isDirectory: true,
      commitMessage: 'Updated Videos',
      updated: '7 days ago',
    },
    {
      id: cuid(),
      name: 'src',
      isDirectory: true,
      commitMessage: 'Added channel names',
      updated: '6 days ago',
    },
    {
      id: cuid(),
      name: '.eslintrc.json',
      isDirectory: false,
      commitMessage: 'Initial commit from Create Next App',
      updated: '8 days ago',
    },
    {
      id: cuid(),
      name: '.gitignore',
      isDirectory: false,
      commitMessage: 'Initial commit from Create Next App',
      updated: '8 days ago',
    },
    {
      id: cuid(),
      name: 'README.md',
      isDirectory: false,
      commitMessage: 'Initial commit from Create Next App',
      updated: '8 days ago',
    },
    {
      id: cuid(),
      name: 'next.config.js',
      isDirectory: false,
      commitMessage: 'Initial commit from Create Next App',
      updated: '8 days ago',
    },
    {
      id: cuid(),
      name: 'package-lock.json',
      isDirectory: false,
      commitMessage: 'Added Sidebar for laptop screen',
      updated: '6 days ago',
    },
    {
      id: cuid(),
      name: 'package.json',
      isDirectory: false,
      commitMessage: 'Added Sidebar for laptop screen',
      updated: '6 days ago',
    },
    {
      id: cuid(),
      name: 'postcss.config.js',
      isDirectory: false,
      commitMessage: 'Completed Navbar',
      updated: '7 days ago',
    },
    {
      id: cuid(),
      name: 'tailwind.config.js',
      isDirectory: false,
      commitMessage: 'Added Sidebar for laptop screen',
      updated: '6 days ago',
    },
    {
      id: cuid(),
      name: 'tsconfig.json',
      isDirectory: false,
      commitMessage: 'Initial commit from Create Next App',
      updated: '8 days ago',
    },
  ];
  return (
    <div className="bg-[#161b22] sm:bg-[#0d1117] w-full text-[#f0f6fc] px-[15px] md:px-[25px] py-[16px] flex flex-col gap-y-3">
      <div className="flex justify-between items-center w-full text-[#c9d1d9] text-sm font-semibold">
        <div className="flex gap-x-5">
          <button className="flex items-center gap-x-2 w-fit bg-[#21262d] justify-center rounded-[6px] border select-none px-[12px] py-[5px] border-gray-700 hover:border-gray-400 hover:bg-[#30363d]">
            <Branch className="fill-[#8b949e] shrink-0" />
            main
            <DropDown className="h-[18px] w-[18px] -ml-[4px] fill-[#8b949e] shrink-0" />
          </button>
          <div className="hidden lg:flex items-center group gap-x-1 font-normal">
            <Branch className="fill-white shrink-0 group-hover:fill-[#58a6ff] group-hover:cursor-pointer" />
            <span className="group-hover:text-[#58a6ff] group-hover:cursor-pointer">1</span>
            <span className="text-[#8b949e] group-hover:text-[#58a6ff] group-hover:cursor-pointer">branch</span>
          </div>
          <div className="hidden lg:flex items-center group gap-x-1 font-normal">
            <Tags className="fill-white shrink-0 group-hover:fill-[#58a6ff] group-hover:cursor-pointer" />
            <span className="group-hover:text-[#58a6ff] group-hover:cursor-pointer">0</span>
            <span className="text-[#8b949e] group-hover:text-[#58a6ff] group-hover:cursor-pointer">tags</span>
          </div>
        </div>
        <div className="flex gap-x-2">
          <button className="flex items-center gap-x-2 w-fit bg-[#21262d] justify-center rounded-[6px] border select-none px-[18px] py-[5px] border-gray-700 hover:border-gray-400 hover:bg-[#30363d] shrink-0">
            Go to file
          </button>
          <button className="hidden md:flex items-center gap-x-1 w-fit bg-[#238636] justify-center rounded-[6px] select-none pl-[15px] pr-[10px] py-[5px] hover:bg-[#2ea043] shrink-0 text-white">
            Code
            <DropDown className="h-[18px] w-[18px] -ml-[4px] fill-white shrink-0" />
          </button>
        </div>
      </div>
      <div className="flex flex-col text-sm border rounded-[6px] border-gray-700">
        <div className="flex justify-between p-[16px] font-semibold border-b border-gray-700 sm:bg-[#161b22] rounded-t-[6px]">
          <div className="flex items-center gap-x-2">
            <Image src="/avatar.png" alt="pinakipb2" width="600" height="600" className="rounded-full w-[24px] h-[24px] hover:cursor-pointer" />
            <div className="truncate hover:underline hover:cursor-pointer">pinakipb2</div>
            <div className="hover:underline hover:cursor-pointer font-normal hover:text-[#58a6ff] hidden sm:block shrink-0">Added channel names</div>
            <div className="hover:cursor-pointer bg-[#6E768166] hover:bg-[#388BFD66] rounded-[1px] px-1.5 text-xs h-[12px] w-[20px] text-center flex items-center justify-center pb-1">...</div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden lg:flex items-center font-normal gap-x-1 group">
              <Message className="fill-white shrink-0 group-hover:fill-[#58a6ff] group-hover:cursor-pointer" />
              <span className="group-hover:text-[#58a6ff] group-hover:cursor-pointer pb-1">1</span>
            </div>
            <Check className="fill-[#3fb950] hover:cursor-pointer shrink-0" />
            <div className="font-normal text-xs text-[#8b949e] hover:text-[#58a6ff] hover:underline hover:cursor-pointer -ml-[6px] shrink-0 hidden lg:block">938b12f</div>
            <div className="font-normal text-[#8b949e] hover:text-[#58a6ff] hover:underline hover:cursor-pointer -ml-[6px] shrink-0">6 days ago</div>
            <div className="flex items-center gap-x-1 group hover:cursor-pointer">
              <History className="fill-white group-hover:fill-[#58a6ff] hover:cursor-pointer shrink-0" />
              <span className="group-hover:text-[#58a6ff] hidden sm:block">14</span>
              <span className="group-hover:text-[#58a6ff] hidden lg:block font-normal text-[#8b949e]">commits</span>
            </div>
          </div>
        </div>
        {!showRepoCode ? (
          <div className="hover:underline hover:cursor-pointer text-center text-[#58a6ff] py-[10px] px-[16px]" onClick={() => setShowRepoCode(true)}>
            View code
          </div>
        ) : (
          <div className="flex flex-col text-[#8b949e]">
            {repoCode.map((file, idx) => (
              <div key={file.id} className={clsx('grid grid-flow-col grid-cols-2 md:grid-cols-3 px-[3px] py-[8px] hover:bg-[#161b22]', [idx !== repoCode.length - 1 && 'border-b border-gray-800'])}>
                <div className="flex gap-x-3 text-[#f0f6fc] pl-[16px]">
                  {file.isDirectory ? (
                    <div>
                      <Directory className="fill-[#8b949e] shrink-0" />
                    </div>
                  ) : (
                    <div>
                      <File className="fill-[#8b949e] shrink-0" />
                    </div>
                  )}
                  <span className="hover:text-[#58a6ff] hover:underline hover:cursor-pointer shrink-0 truncate">{file.name}</span>
                </div>
                <span className="hidden md:block hover:text-[#58a6ff] hover:underline hover:cursor-pointer shrink-0 truncate">{file.commitMessage}</span>
                <div className="pr-[16px] justify-end shrink-0 truncate text-end">{file.updated}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Code;
