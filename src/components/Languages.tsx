import { BsCircleFill } from 'react-icons/bs';

const Languages = () => {
  return (
    <div className="bg-[#161b22] sm:bg-[#0d1117] w-full text-[#f0f6fc] px-[15px] md:pr-[25px] md:pl-0 text-[16px] font-[600] py-[24px] flex flex-col space-y-3.5">
      <span>Languages</span>
      <div className="flex flex-col items-start space-y-2">
        <div className="h-[8px] w-full shrink-0 flex divide-x-[0.1rem] divide-gray-700">
          <div className="w-[98.5%] bg-[#3178c6] rounded-l"></div>
          <div className="w-[1.1%] bg-[#f1e05a]"></div>
          <div className="w-[0.4%] bg-[#563d7c] rounded-r"></div>
        </div>
        <div className="flex flex-wrap items-center px-1 gap-x-6 gap-y-2">
          <div className="hover:text-[#58a6ff] hover:cursor-pointer text-xs flex items-center space-x-1 group">
            <BsCircleFill className="w-[8px] h-[8px] text-[#3178c6] mr-2" />
            <span>TypeScript</span>
            <span className="text-[#8b949e] group-hover:text-[#58a6ff]">98.5%</span>
          </div>
          <div className="hover:text-[#58a6ff] hover:cursor-pointer text-xs flex items-center space-x-1 group">
            <BsCircleFill className="w-[8px] h-[8px] text-[#f1e05a] mr-2" />
            <span>JavaScript</span>
            <span className="text-[#8b949e] group-hover:text-[#58a6ff]">1.1%</span>
          </div>
          <div className="hover:text-[#58a6ff] hover:cursor-pointer text-xs flex items-center space-x-1 group">
            <BsCircleFill className="w-[8px] h-[8px] text-[#563d7c] mr-2" />
            <span>CSS</span>
            <span className="text-[#8b949e] group-hover:text-[#58a6ff]">0.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
