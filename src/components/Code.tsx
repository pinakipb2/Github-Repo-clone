import cuid from 'cuid';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

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

const Code = () => {
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
        <div className="flex justify-between p-[16px] font-semibold border-b border-gray-700 sm:bg-[#161b22]">
          <div className="flex items-center gap-x-2">
            <Image src="/avatar.png" alt="pinakipb2" width="600" height="600" className="rounded-full w-[24px] h-[24px] hover:cursor-pointer" />
            <div className="hover:underline hover:cursor-pointer">pinakipb2</div>
            <div className="hover:underline hover:cursor-pointer font-normal hover:text-[#58a6ff] hidden sm:block">Added channel names</div>
            <div className="hover:cursor-pointer bg-[#6E768166] hover:bg-[#388BFD66] rounded-[1px] px-1.5 text-xs h-[12px] w-[20px] text-center flex items-center justify-center pb-1">...</div>
          </div>
          <div className="flex items-center gap-x-4">
            <Check className="fill-[#3fb950] hover:cursor-pointer shrink-0" />
            <div className="font-normal text-[#8b949e] hover:text-[#58a6ff] hover:underline hover:cursor-pointer -ml-[6px]">6 days ago</div>
            <div className="flex items-center gap-x-1 group hover:cursor-pointer">
              <History className="fill-[#ffffff] group-hover:fill-[#58a6ff] hover:cursor-pointer shrink-0" />
              <span className="group-hover:text-[#58a6ff] hidden sm:block">14</span>
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
              <div key={file.id} className={clsx('flex items-center justify-between px-[3px] py-[8px] hover:bg-[#161b22]', [idx !== repoCode.length - 1 && 'border-b border-gray-700'])}>
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
                  <span className="hover:text-[#58a6ff] hover:underline hover:cursor-pointer">{file.name}</span>
                </div>
                <div className="pr-[16px]">{file.updated}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Code;
