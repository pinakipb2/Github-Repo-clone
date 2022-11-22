import styles from '../styles/ReadmeMD.module.css';

const List = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"
      ></path>
    </svg>
  );
};

const Pencil = ({ className }: { className: string }) => {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={className}>
      <path
        fillRule="evenodd"
        d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
      ></path>
    </svg>
  );
};

const ReadmeMD = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col w-full bg-[#0d1117]">
      <div className="flex flex-col shrink-0 h-[50px] sticky top-0 border-y border-gray-600 bg-[#0d1117]">
        <div className="p-[8px] flex flex-row items-center justify-between shrink-0">
          <div className="flex text-white items-center">
            <List className="h-[30px] w-[30px] p-[7px] fill-[#8b949e] mr-2 hover:cursor-pointer rounded-[6px] hover:bg-[#30363d]" />
            <span className="text-[#f0f6fc] text-[14px] font-[600] hover:underline hover:cursor-pointer hover:text-[#58a6ff]">README.md</span>
          </div>
          <div>
            <Pencil className="h-[30px] w-[30px] p-[7px] fill-[#8b949e] hover:cursor-pointer rounded-[6px] hover:bg-[#30363d]" />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className={styles['markdown-body']}>{children}</div>
      </div>
      <div className="h-[1px] shrink-0 bg-gray-600"></div>
    </div>
  );
};

export default ReadmeMD;
